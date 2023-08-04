import { Component } from '@angular/core';
import Task from 'src/Task';
import { TaskService } from './../../services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  Tasks:Task[] = [];
  
  constructor(private taskService: TaskService) {}

  ngOnInit():void {
    this.taskService.getTasks().subscribe((tasks)=>this.Tasks = tasks);
  }

  onDeleteItem(task: Task){
     this.taskService.deleteTask (task).subscribe(()=>{
      this.Tasks = this.Tasks.filter(t => t.id !== task.id);

     })
  }

  onToggleRemainder(task:Task) {
    task.remainder = !task.remainder;
    this.taskService.ToggleTask(task).subscribe();
  }

  onAddTask(task: Task){
    this.taskService.AddTask(task).subscribe((task)=>{
      this.Tasks.push(task)
    })
 }


}
