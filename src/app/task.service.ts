import { Injectable } from '@angular/core';
import {Task} from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  addTask(taskModel: Task) {
    localStorage.setItem(taskModel.id, JSON.stringify(taskModel));
  }

  removeTask(itemId: string) {
    localStorage.removeItem(itemId);
  }

  getTasks(): Task[] {
    for (let i = 0; i < localStorage.length; i++) {

      // set iteration key name
      const key = localStorage.key(i);

      // use key name to retrieve the corresponding value
      const value = localStorage.getItem(key);

      // console.log the iteration key and value
      console.log('Key: ' + key + ', Value: ' + value);

    }
    return [];
  }
}
