import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    console.log(this.addTaskForm);
  }
}
