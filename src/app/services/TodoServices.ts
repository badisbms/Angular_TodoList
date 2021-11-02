import { Component, OnInit, Input, Injectable } from '@angular/core';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../models/todo.models';

//permet d'injecter le service a tous les components
@Injectable({
  providedIn: 'root',
})
export class TodoServices {

 todos: Todo[];
  // newTodo: any;

  //font awesome icons
  faPen = faPen;
  faPlus = faPlus;
  
  constructor() {

 
  this.todos = [
    {
      todoName: 'tache1',
      todoStatus: true,
      wantModif: true,
      description : "",
    },
    {
      todoName: 'tache2',
      todoStatus: false,
   
      wantModif: false,
      description : "",
    },
    {
      todoName: 'tache3',
      todoStatus: true,
      wantModif: false,
      description : "",
    },
  ];
  

    

    // this.todos = new Promise((resolve, reject) => {

    //   const data = [
    //     {
    //       todoName: 'tache1',
    //       description : "",
    //       todoStatus: true,
    //       wantModif: false,
         
    //     },
    //     {
    //       todoName: 'tache2',
    //       todoStatus: false,
    //       wantModif: false,
    //       description : ""
    //     },
    //     {
    //       todoName: 'tache3',
    //       todoStatus: true,
    //       wantModif: false,
    //       description : ""
    //     },
    //   ];

    //   if (data.length) {
    //     this.newTodo = data;

    //     setTimeout(() => {
    //       resolve(data);
    //     }, 1000);
    //   } else {
    //     reject('Les données ne sont aps présente sur le serveur');
    //   }
    // });
  }



  //étant donné que l'on a changé la nature de this.todos en promesse les fct ne marche plus
  //du coup on va créer une var intermédiare (newTodo) pour pallier a ce probleme

  onChangeStatus(i: number) {
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
  }

  modify(i: number) {
    this.todos[i].wantModif = !this.todos[i].wantModif;
  }

  //Fct recup id params
  getTodo(index: number) {
    if (this.todos[index]) {
      return this.todos[index];
    }
    return false;
  }

  validateEnter(e: any, i: number) {
    var e = window.event || e;
    var touche = e.charCode || e.keyCode;
    if (touche == 13) {
      this.modify(i);
    }
  }

  addTodoFromForm (todo:Todo) : void{
    this.todos.push(todo)
  }
  

  //commenté pour montrer exemple de promesse, on simula l'arrivé des donées d'un serveur
  //du coup sur le html, faut modifier car on recoit une promesse et plus un objet
//  this. todos = [
//     {
//       todoName: 'tache1',
//       todoStatus: true,
//       todoImg: 'https://source.unsplash.com/user/erondu/250x250',
//       wantModif: true,
//     },
//     {
//       todoName: 'tache2',
//       todoStatus: false,
//       todoImg: 'https://source.unsplash.com/user/erondu/250x250',
//       wantModif: false,
//     },
//     {
//       todoName: 'tache3',
//       todoStatus: true,
//       todoImg: 'https://source.unsplash.com/user/erondu/250x250',
//       wantModif: false,
//     },
//   ];
}
