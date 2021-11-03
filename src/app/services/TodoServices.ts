import { Injectable } from '@angular/core';
//font awesome icons
import { faPen, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../models/todo.models';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

//permet d'injecter le service a tous les components
@Injectable({
  providedIn: 'root',
})
export class TodoServices {

  todos: Todo[];
  todosSubject = new Subject<any[]>();
  faPen = faPen;
  faPlus = faPlus;
  faTimes = faTimes

  constructor(private httpClient: HttpClient) {
    this.getDataFromServ();
  }

  //permet de recup mes todo dans la BDD
  getDataFromServ() {
    this.httpClient
      .get<Todo[]>(
        'https://todo-list-b3973-default-rtdb.europe-west1.firebasedatabase.app/todos.json'
      )
      .subscribe(
        (todoRecup: Todo[]) => {
          this.todos = todoRecup;
          this.emitTodos();
        },
        (error) => {
          console.log('erreur lors de la recupéation des données ' + error);
        },
        () => {
          console.log('Recup des données ok');
        }
      );
  }

  //permet l"envoi de nouvelles TODO"
  savedFromServer(): void {
    this.httpClient
      .put(
        'https://todo-list-b3973-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
        this.todos
      )
      .subscribe(
        () => {
          console.log('données enregistrées avec succés');
        },
        (error) => {
          console.log("erreur lors de l'enreg" + error);
        }
      );
  }
  //Observable
  emitTodos(): void {
    this.todosSubject.next(this.todos);
  }

  // permet de switch entre bouton en cours et terminé
  onChangeStatus(i: number) {
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
    this.emitTodos();
    this.savedFromServer();
  }
  //permet de modifier la  descritpion de la todo
  modify(i: number) {
    this.todos[i].wantModif = !this.todos[i].wantModif;
    this.emitTodos();
    this.savedFromServer();
  }

  //Fct recup id params pour le bouton detail
  getTodo(index: number) {
    if (this.todos[index]) {
      return this.todos[index];
    }
    return false;
  }

  //Fontion pour valider la modif de la todo avec entrée
  validateEnter(e: any, i: number) {
    var e = window.event || e;
    var touche = e.charCode || e.keyCode;
    if (touche == 13) {
      this.modify(i);
      this.savedFromServer();
    }
  }

  addTodoFromForm(todo: Todo): void {
    this.todos.push(todo);
    this.savedFromServer();
  }
}
