import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoServices } from './services/TodoServices';
import { TodoComponent } from './todo/todo.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'contact', component: ContactComponent },
  //voir sur single todo component a  partir du constructor
  { path: 'singletodo/:id', component: SingleTodoComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    HomeComponent,
    ContactComponent,
    SingleTodoComponent,
    NotFoundComponent,
    AddTodoComponent,
  ],

  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  // providers: [TodoServices],
  bootstrap: [AppComponent],
})

export class AppModule {}
