import { Component, effect, inject, viewChild } from '@angular/core';
import { MatFormField, MatFormFieldModule, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { TodosFilter, TodosStore } from '../todos.store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todos-list',
  standalone:true,
  imports: [MatFormField,
    MatInput,
    MatIcon,
    MatSuffix,
    MatLabel,
MatButtonToggleGroup,
MatButtonToggle,
MatSelectionList,MatListModule,       
MatIconModule,
CommonModule
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css'
})
export class TodosListComponent {
  store = inject(TodosStore)
  filter=viewChild.required(MatButtonToggleGroup)
  constructor(){
    effect(()=>{const filter=this.filter();
      filter.value=this.store.filter()
    })
  }
  async onAddTodo(title:string){
    await this.store.addTodo(title)
  }
  async onDeleteTodo(id:string,event:MouseEvent)
  {
    event.stopPropagation()
await this.store.deleteTodo(id)
  }
  async onTodoToggled(id:string,completed:boolean){
    await this.store.updateTodo(id,completed)
  }
  onFilterTodos(event:MatButtonToggleChange)
  {
    const filter=event.value as TodosFilter
    this.store.updateFilter(filter)
  }
}
