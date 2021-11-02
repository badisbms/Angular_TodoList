import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.models';
import { TodoServices } from 'src/app/services/TodoServices';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {



  @Input() showMePartially: boolean;

  //donénes issue deu model TODO

  todoForm = new Todo();

  constructor( private todoService : TodoServices) {
    
  }

  ngOnInit(): void {
  }

  //recup donnéées du formulaire et les envoi pour créer une nouvelle tache
  onFormSubmit () : void {
    this.todoService.addTodoFromForm(this.todoForm)
  }

}
