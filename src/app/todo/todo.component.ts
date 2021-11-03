import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Todo } from '../models/todo.models';

import { TodoServices } from '../services/TodoServices';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})

export class TodoComponent implements OnInit, OnDestroy{

  todos: Todo[];
  //font awesome icons
  fapen: any;
  faPlus : any
  faTimes : any
  //permet d'affciher ou non le form de creation de todo
  showVar: boolean = false;

  todoSub : Subscription;

  //router est use pour pour naviguer grace a getdetail
  constructor(private router: Router, private todoServices: TodoServices ) {}

  ngOnInit(): void {
    //ici on recupére la promesse effectuer dans TodoService afin de la traiter
   this.todos = this.todoServices.todos 

   this.todoServices.todosSubject.subscribe(
     (value: any[]) => {
       this.todos = value
     },
     (error) => {
       console.log(error);
  
     },
     () => {
       console.log("Observable ok");
       
     }
   )
   this.todoServices.emitTodos()
      // .then((dataRecup: any) => {
      //   this.todos = dataRecup;
      // })
      // .catch((error: string) => {
      //   console.log('Erreur' + error);
      // });

    this.fapen = this.todoServices.faPen;
    this.faPlus = this.todoServices.faPlus;
    this.faTimes = this.todoServices.faTimes;
  }

  onChangeStatus(i: number) {
    this.todoServices.onChangeStatus(i);
  }

  modify(i: number) {
    this.todoServices.modify(i);
  }

  //redirige sur la page detail de la tache
  getDetail(i: number) {
    this.router.navigate(['singletodo', i]);
  }

  //permet de valider l'entrée avec bouton entrer
  validateEnter (e : any, i : number ) {
    this.todoServices.validateEnter(e , i)
}

//affiche le form de creation de tache
toggleChild() {
  this.showVar = !this.showVar;
}

ngOnDestroy () {
  this.todoSub.unsubscribe()
}
}
