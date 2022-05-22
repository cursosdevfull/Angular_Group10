import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthApplication } from '../../../core/application/auth.application';

@Component({
  selector: 'amb-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.css'],
})
export class PageDashboardComponent implements OnInit {
  statusUser = false;
  section = '';

  constructor(
    @Inject(AuthApplication) private auth: AuthApplication,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.statusUser = this.auth.isAuthenticated;

    this.section = this.activatedRoute.snapshot.paramMap.get(
      'section'
    ) as string;

    this.activatedRoute.params.subscribe((params: any) => {
      this.section = params.section;
    });
  }
}
