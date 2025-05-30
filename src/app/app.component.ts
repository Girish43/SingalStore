import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosStore } from './todos.store';
import { JsonPipe } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,JsonPipe,TodosListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ngrx-signal-store-crash-course';
  store=inject(TodosStore);
  ngOnInit() {
      this.loadTodos().then(()=>console.log("Todos Loaded!",this.store.todos()))
  }
  async loadTodos(){
    await this.store.loadAll()
}
}
