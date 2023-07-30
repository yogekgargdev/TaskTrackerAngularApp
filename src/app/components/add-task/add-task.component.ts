import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @Output() OnAddTask: EventEmitter<Task> = new EventEmitter<Task>();

  text: string;
  day: string;
  reminder: boolean = false;

  OnSubmit() {
    if (this.text == null || this.text == "") {
      alert("Please add data into the text field");
      return;
    }

    const taskToAdd : Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.OnAddTask.emit(taskToAdd);

    this.text='';
    this.day='';
    this.reminder=false;
  }

}
