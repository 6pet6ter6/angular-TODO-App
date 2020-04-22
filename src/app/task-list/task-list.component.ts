import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  removeTask(taskId: string) {
    this.taskService.removeTask(taskId);
  }

  getTasks() {
    return this.taskService.getTasks();
  }

}
