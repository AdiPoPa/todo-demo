import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  private todo: any = {};

  categoryOptions = [
    {value: 'personal', name: 'Personal', icon: '/assets/material-letter-icons/P.png'},
    {value: 'work', name: 'Work', icon: '/assets/material-letter-icons/W.png'},
    {value: 'school', name: 'School', icon: '/assets/material-letter-icons/S.png'},
    {value: 'others', name: 'Others', icon: '/assets/material-letter-icons/O.png'}
  ];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  onSubmit(todoForm: NgForm) {
    this.todo.title = todoForm.value.title;
    this.todo.body = todoForm.value.body;
    this.todo.category = this.categoryOptions.find(obj => obj.value == todoForm.value.category).name;
    this.todo.thumbnail = this.categoryOptions.find(obj => obj.value == todoForm.value.category).icon;
    todoForm.resetForm();

    this.todoService.addTodo(this.todo);
  }

}
