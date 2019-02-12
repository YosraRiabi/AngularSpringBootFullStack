import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;
  //   = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'visit Tunisia', false, new Date())
  //   // {id : 1, description : 'Learn to Dance'},
  //   // {id : 2, description : 'Become an Expert at Angular'},
  //   // {id : 3, description : 'visit Tunisia'}
  // ]

  // todo = {
  //   id : 1,
  //   description : 'learn to dance'
  // }

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
      this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('yosra').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    console.log(`delet todo ${id}`);
    this.todoService.deleteTodo('yosra', id).subscribe(
      response => {
        console.log(response);
        this.message = `delete of todo ${id} successful!`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id) {
    console.log(`Update ${id}`);
    this.router.navigate(['todos', id]);
  }

}
