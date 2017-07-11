import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../../models/todo.model';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() todoIndex: number;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  onDelete() {
    this.todoService.removeTodo(this.todoIndex);
  }

}
