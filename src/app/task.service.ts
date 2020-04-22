import { Injectable } from '@angular/core';
import {Task} from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];

  constructor() { }

  addTask(taskModel: Task) {
    localStorage.setItem(taskModel.id, JSON.stringify(taskModel));
  }

  removeTask(itemId: string) {
    localStorage.removeItem(itemId);
  }

  reset() {
    localStorage.clear();
  }

  getTasks(): Task[] {
    this.tasks = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      this.tasks.push(JSON.parse(value));
    }
    return this.tasks;
  }
}
