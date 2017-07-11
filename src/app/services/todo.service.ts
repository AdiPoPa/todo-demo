import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class TodoService {

  private url = "https://todo-demo-andrei-b.c9users.io/";

  private todos: Todo[] = [];

  todosSubject = new Subject<Todo[]>();

  constructor(private http: Http) {
  }

  retrieveTodos() {
    this.getTodos().subscribe(
      (todos: any[]) => {
        this.todos = todos;
        this.todosSubject.next(this.todos);
      },
      (error) => console.log(error)
    );
  }

  getTodos() {
    return this.http.get(this.url + 'get-memos/')
      .map(
        (response: Response) => {
          return response.json();
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Couldn\'t retrieve TODOs from server');
        }
      );
  }

  retrieveTodosByCategory(category: string) {
    this.getTodosByCategory(category.toLowerCase()).subscribe(
      (todos: any[]) => {
        this.todos = todos;
        this.todosSubject.next(this.todos);
      },
      (error) => console.log(error)
    );
  }

  getTodosByCategory(category: string) {
    return this.http.get(this.url + 'get-memo-category/' + category)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Couldn\'t retrieve TODOs by category');
        }
      )
  }

  addTodo(todo: Todo) {
    this.postTodo(todo).subscribe(
      (response) => this.retrieveTodos(),
      (error) => console.log(error)
    );
  }

  postTodo(todo: Todo) {
    return this.http.post(this.url + 'add-memo/', todo);
  }

  removeTodo(todoIndex: number) {
    this.deleteTodo(this.todos[todoIndex].id).subscribe(
      (response) => this.retrieveTodos(),
      (error) => console.log(error)
    );
  }

  deleteTodo(id: number) {
    console.log(this.url + 'delete-memo/' + id + '/');
    return this.http.delete(this.url + 'delete-memo/' + id + '/');
  }

}
