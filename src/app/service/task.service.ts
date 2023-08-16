import { Injectable } from '@angular/core';
import { Observable, filter, of } from 'rxjs';
import { Task } from '../Task';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = of(JSON.parse(localStorage.getItem('tasks')!));
    return tasks;
  }

  deleteTask(taskItem: Task): Observable<Task[]> {
    const tasks: Task[] = JSON.parse(localStorage.getItem('tasks')!);
    const filteredTasks = tasks.filter((task: Task) => task.id !== taskItem.id);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    return of(filteredTasks);
  }

  toggleTask(task: Task) {
    const tasks: Task[] = JSON.parse(localStorage.getItem('tasks')!);
    const newTasks = tasks.map((t: Task) => {
      if (t.id === task.id) {
        t.remainder = !t.remainder;
        return t;
      } else {
        return t;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    return of(newTasks);
  }

  onAddTask(task: Task) {
    const tasks: Task[] = JSON.parse(localStorage.getItem('tasks')!);
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return of(tasks);
  }
}
