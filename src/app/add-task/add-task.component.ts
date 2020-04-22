import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TaskService} from '../task.service';
import {Task} from '../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  addTaskForm = new FormGroup({
    description: new FormControl(),
    dateTime: new FormControl()
  });

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  addTask() {
    console.log(this.addTaskForm);

    const description = this.addTaskForm.value.description as string;
    const date = this.addTaskForm.value.dateTime as Date;
    const id = Math.random().toString(36).substring(7);
    const task: Task =  {
      id,
      description,
      date
    };
    this.taskService.addTask(task);
    this.taskService.getTasks();
    this.addTaskForm.reset();
  }

  reset() {
    this.taskService.reset();
  }
}
