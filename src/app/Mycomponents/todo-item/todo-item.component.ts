import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
// import * as EventEmitter from 'node:events';
import { Todos } from '../../../../src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todos;
  @Output() todoDelete:EventEmitter<Todos>=new EventEmitter();
  @Output() todoCheckbox:EventEmitter<Todos>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:Todos){
    this.todoDelete.emit(todo);
    console.log('triggered');
    
  }
  onCheckbocClick(todo){
    this.todoCheckbox.emit(todo);
     
  }

}
