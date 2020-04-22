import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskListComponent,
    TaskComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
