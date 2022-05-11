import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { TodosService } from '../todos.service';
import { FilterEnum } from '../types/filter.enum';
import { TodoInterface } from '../types/todo.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  visibleTodos$: Observable<TodoInterface[]>;

  constructor(private todosService: TodosService) {
    this.visibleTodos$ = combineLatest(
      this.todosService.todos$,
      this.todosService.filter$)
      .pipe(map(([todos,filter]:[TodoInterface[], FilterEnum])=>{

        if(filter === FilterEnum.ACTIVE){
          return todos.filter(todo =>!todo.isCompleted)
        }
        else if(filter === FilterEnum.COMPLETED){
          return todos.filter(todo =>todo.isCompleted)
        }
        return todos
      }))
  }

  ngOnInit(): void {
  }

}
