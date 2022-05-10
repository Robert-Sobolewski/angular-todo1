import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
// import { MaterialModule } from '@angular/material';
const routes: Routes = [{
  path: '',
  component: TodosComponent
}]

@NgModule({
  declarations: [
    TodosComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // MaterialModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ]
})
export class TodosModule { }
