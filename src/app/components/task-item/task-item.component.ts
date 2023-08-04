import { Component,Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Task from 'src/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Task = { id: 0, text: '', day: '', remainder: false };
  faTimes = faTimes;
  @Output() onDeleteItem:EventEmitter<Task> = new EventEmitter();
  @Output() onToggleRemainder:EventEmitter<Task> = new EventEmitter();
  onDelete(task: Task) {
    this.onDeleteItem.emit(task); 
  }
  onToggle(task:Task) {
    this.onToggleRemainder.emit(task);
  }
}
