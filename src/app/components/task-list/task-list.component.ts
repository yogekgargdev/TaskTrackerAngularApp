import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  faXmark = faXmark;
  @Input() task: Task;
  @Output() OnDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() OnToggleTask: EventEmitter<Task> = new EventEmitter<Task>();

  OnClick(task: Task) {
    this.OnDeleteTask.emit(task);
  }
  ondblclick(task: Task) {
    this.OnToggleTask.emit(task);

  }

}
