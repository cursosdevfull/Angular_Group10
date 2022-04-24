import { Component, Inject, OnInit } from '@angular/core';
import { AuthApplication } from '../../../core/application/auth.application';

@Component({
  selector: 'amb-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.css'],
})
export class PageDashboardComponent implements OnInit {
  statusUser = false;

  constructor(@Inject(AuthApplication) private auth: AuthApplication) {}

  ngOnInit(): void {
    this.statusUser = this.auth.isAuthenticated;
  }
}
