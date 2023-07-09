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
  
  getAllTodos() : Observable<Task[]>{
    return this.http.get<Task[]>(this._URL);
  } 
  
  addTodo(task : Task) : Observable<Task>{
    return this.http.post<Task>(this._URL,task);
  }

  deleteTodo(task : Task) : Observable<Task>{
    return this.http.delete<Task>(this._URL + "/" + task.id);
  }

  editTodo(task : Task) : Observable<Task>{
    return this.http.put<Task>(this._URL + "/" + task.id, task);
  }
}
