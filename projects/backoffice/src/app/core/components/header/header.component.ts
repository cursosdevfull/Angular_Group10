import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApplication } from '../../application/auth.application';

@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    @Inject(AuthApplication) private authApplication: AuthApplication,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authApplication.logout();
  }
}
