import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  TaskList : Task[] = [];

  constructor() { }

  GetServie() : Observable<Task[]>
  {
    this.TaskList= TASKS;
    //return this.TaskList;
    return of(this.TaskList);
  }
}
