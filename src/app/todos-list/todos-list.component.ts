import { Component, inject } from '@angular/core';
import { MatFormField, MatFormFieldModule, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonToggle, MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { TodosStore } from '../todos.store';


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
MatIconModule 
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css'
})
export class TodosListComponent {
  store = inject(TodosStore)
}
