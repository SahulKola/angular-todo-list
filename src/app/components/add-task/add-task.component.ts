import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter();
  text: string = ' ';
  day: string = ' ';
  remainder: boolean = false;
  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      remainder: this.remainder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.remainder = false;
  }
}
