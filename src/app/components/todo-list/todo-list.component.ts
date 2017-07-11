import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  todoList: Todo[];
  subscription: Subscription;

  scrollbarOptions = {axis: 'y', theme: 'minimal-dark'};

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.subscription = this.todoService.todosSubject.subscribe(
      (todos: Todo[]) => {
        this.todoList = todos;
      }
    );
    this.todoService.retrieveTodos();
  }

  onFilter(filterForm: NgForm) {
    this.todoService.retrieveTodosByCategory(filterForm.value.filter);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
