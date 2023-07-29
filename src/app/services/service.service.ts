import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const requestURL = 'http://localhost:3004/tasks';
const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  TaskList: Task[] = [];

  constructor(private http: HttpClient) { }

  GetServie(): Observable<Task[]> {
    //this.TaskList= TASKS;
    //return this.TaskList;
    //return of(this.TaskList);
    return this.http.get<Task[]>(requestURL);
  }
  DeleteTaskService(task:Task):Observable<Task>
  {
    const DeleteUrl=`${requestURL}/${task.id}`
    return this.http.delete<Task>(DeleteUrl);
  }
  UpateToggleTaskService(task:Task):Observable<Task>
  {
    const UpdateUrl=`${requestURL}/${task.id}`
    return this.http.put<Task>(UpdateUrl,task,httpOptions);
  }
}
