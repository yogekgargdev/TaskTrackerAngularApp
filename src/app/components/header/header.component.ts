import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  AddTask: boolean = false;
  private subscription: Subscription;
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.OnToggle().subscribe((ToogleValue) => this.AddTask = ToogleValue);
  }
  toggleAddTask() {
    this.uiService.ToggleShowAddTask();
  }
  CheckHomePageRouter(route: string) {
    return this.router.url == route;
  }


}
