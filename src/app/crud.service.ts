import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  _URL : string;

  constructor(private http: HttpClient) { 
    this._URL = 'http://localhost:3000/tasks';
  }
  
  //get all todos from the array
  getAllTodos() : Observable<Task[]>{
    return this.http.get<Task[]>(this._URL);
  } 
  
  //adding todo to the array present in json - server
  addTodo(task : Task) : Observable<Task>{
    return this.http.post<Task>(this._URL,task);
  }
  
  //deleting selected todo from the array whenever user clicks to delete on particular todo
  deleteTodo(task : Task) : Observable<Task>{
    return this.http.delete<Task>(this._URL + "/" + task.id);
  }

  //editing todo whenever user selects an particular todo
  editTodo(task : Task) : Observable<Task>{
    return this.http.put<Task>(this._URL + "/" + task.id, task);
  }
}
