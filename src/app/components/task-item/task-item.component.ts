import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task = { text: '', day: '', remainder: false };
  faTimes = faTimes;
  @Output() onDelete = new EventEmitter();
  @Output() onToggle = new EventEmitter();
  deleteTask(task: Task) {
    this.onDelete.emit();
  }
  toggleTask(task: Task) {
    this.onToggle.emit();
  }
}
