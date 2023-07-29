import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks'
import { ServiceService } from '../../services/service.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  TasksLists: Task[] = [];

  constructor(private TaskService: ServiceService) { }

  ngOnInit(): void {
    this.TaskService.GetServie().subscribe((tasks) => this.TasksLists = tasks);
  }

}
