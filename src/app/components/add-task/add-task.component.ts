import { Component, Output, EventEmitter } from '@angular/core';
import { UiService } from './../../services/ui.service';
import { Subscription } from 'rxjs';
import Task from 'src/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  
  text: string = '';
  day: string = '';
  remainder: boolean = false;
  showAddTask?: boolean;
  subscription?: Subscription;
  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value)=> this.showAddTask = value);

  }
  onSubmit() {
      if(!this.text) {
        alert('Please Add a Task');
        return;
      }
      const newTask = {
        text: this.text,
        day: this.day,
        remainder: this.remainder
      }

      this.onAddTask.emit(newTask);
      this.text = '';
      this.day = '';
      this.remainder = false;

    }
}
