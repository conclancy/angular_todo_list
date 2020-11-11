import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo) {
    // deletes the todo from the UI
    this.todos = this.todos.filter(t => t.id !== todo.id);

    // deletes the todo from the server
    // note: we cannot perform this action to update UI because server only emulates DELETE requests
    this.todoService.deleteTodo(todo).subscribe(); 
  }

}
