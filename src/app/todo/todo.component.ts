import { Component } from '@angular/core';
import { Task } from '../task';
import { CrudService } from '../crud.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todos : Task[] = [];
  todoObj: Task = new Task();

  todoEntered : string = '';
  editedTodoValue:string = '';

  hasToUpdate : boolean = false;
  id : number = 1;
  isTodosExist : boolean = this.todos.length > 0 ? true : false;

  constructor(
    private taskService : CrudService, 
    private authService : AuthService,
    private router: Router){
    
  }

  ngOnInit(){
    this.todoObj = new Task();
    this.todos = [];
    this.todoEntered = '';
    this.editedTodoValue = '';
    this.getAllTodos();
  }
  
  getAllTodos(){
    this.taskService.getAllTodos().subscribe((data) => {
      this.todos = data
      this.isTodosExist = this.todos.length >0 ? true : false;
    }, err =>{
      alert("unable to add todo" + err.message);
    });
  } 

  onAddTodo(){
    if(this.todoEntered){
      this.todoObj.task_name = this.todoEntered;
      this.taskService.addTodo(this.todoObj).subscribe(data =>{
        console.log('Todo added');
        this.ngOnInit();
      }, err => {
        alert('Something gone wrong' + err.message)
      });
    }
  }

  onDeleteTodo(todo : Task){
    console.log(todo)
    this.taskService.deleteTodo(todo).subscribe((data) =>{
      this.ngOnInit();
    }, err =>{
      alert('something wrong with deleting todo - '  + err.message);
    })
  }

  editButtonHandler(todo : Task){
      this.todoObj = todo;
      // console.log(todo)
      // this.todoObj.task_name = todo.task_name;
      this.editedTodoValue = todo.task_name;
  }

  onEditTodo(){
    this.todoObj.task_name = this.editedTodoValue;
    this.taskService.editTodo(this.todoObj).subscribe(data =>{
      this.ngOnInit();
    }, err=>{
      alert('something gone wrong while editing' + err.message);
    })

  }


  //logout method using firebase authentication

  onLogOutAuth(){
    this.authService.logout()
    .then(() =>{
      this.router.navigate(['/login']);
      alert('successfully logged out!!!!')

    })
  }


}
