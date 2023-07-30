import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private subject: Subject<any> = new Subject<any>();

  constructor() { }

  ToggleShowAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  OnToggle(): Observable<any> {
    return this.subject.asObservable();
  }


}


