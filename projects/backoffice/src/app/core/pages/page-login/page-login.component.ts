import { Component, OnInit } from '@angular/core';
import { ILayout } from '../../../config/interfaces/layout.interface';
import { InactivityService } from '../../../config/services/inactivity.service';
import { LayoutService } from '../../../config/services/layout.service';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  constructor(
    private layoutService: LayoutService,
    private inactivityService: InactivityService
  ) {
    const configLayout: ILayout = { header: false, menu: false };
    //layoutService.settingConfiguration(configLayout);
    layoutService.configuration = configLayout;
    inactivityService.stopWatching();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    const configLayout: ILayout = { header: true, menu: true };
    this.layoutService.configuration = configLayout;
  }
}
