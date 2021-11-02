import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoServices } from "../services/TodoServices";

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['../todo/todo.component.css']
})

export class SingleTodoComponent implements OnInit {



  //je recup la route et mon service
  constructor(private routes : ActivatedRoute, private todoServices: TodoServices ) { }
 
  todos: any;
  
  
  ngOnInit(): void {
    //ici je recup le params passé en url 
    const id = +this.routes.snapshot.params["id"];
    //ici j'appelle la fct pour appeler le bon todo
    this.todos = this.todoServices.getTodo(id)
    
  }


}


