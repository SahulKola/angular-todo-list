import { Component } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();
  constructor(private ui: UiService, private router: Router) {
    this.subscription = this.ui
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  clickBtn() {
    this.ui.toggleAddTask();
  }
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
