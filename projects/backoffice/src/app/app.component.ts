import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BookItem } from './book/domain/book';
import { Title } from './book/domain/vo/title';
import { LAYOUT_CONSTANTS } from './config/constants/layout.constant';
import { ILayout } from './config/interfaces/layout.interface';
import { InactivityService } from './config/services/inactivity.service';
import { LayoutService } from './config/services/layout.service';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  openSideNav = true;
  currentDate = new Date();
  configLayout: ILayout = LAYOUT_CONSTANTS;
  startApp = false;
  timeoutExceeded = false;

  constructor(
    private layoutService: LayoutService,
    private inactivityService: InactivityService,
    private router: Router
  ) {
    //layoutService.gettingConfiguration().subscribe((config) => {
    layoutService.configuration.subscribe((config: ILayout) => {
      this.configLayout = config;
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects !== '/' && !this.startApp) {
          this.startApp = true;
          this.inactivityService.startWatching();
        }
      }
    });

    this.inactivityService.idleObservable().subscribe((status) => {
      this.timeoutExceeded = status;
      console.log('timeout exceeded: ', status);
    });
  }
}
