import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  value:string="";
  constructor(private todoService:TodosService) {
    // this.todoService.todos$.subscribe(todos=>{
    //   console.log('todos',todos)
    // })
   }

  ngOnInit(): void {
  }
  changeText(event: Event):void{
    const target = event.target as HTMLInputElement
    this.value =target.value
  }
  addTodo():void{
    this.todoService.addTodo(this.value)
    this.value = ""
  }

}
