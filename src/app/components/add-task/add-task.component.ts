import { Subscription } from 'rxjs';
import { Component, EventEmitter, Output } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter();
  id: number = 0;
  text: string = ' ';
  day: string = ' ';
  remainder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private ui: UiService) {
    this.subscription = this.ui
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }
    const newTask = {
      id: this.id + 1,
      text: this.text,
      day: this.day,
      remainder: this.remainder,
    };

    this.onAddTask.emit(newTask);
    this.id = this.id + 1;
    this.text = '';
    this.day = '';
    this.remainder = false;
  }
}
