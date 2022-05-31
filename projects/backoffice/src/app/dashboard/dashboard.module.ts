import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CovidComponent } from './components/covid/covid.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CovidApplication } from './application/covid.application';
import { CovidInfrastructure } from './infrastructure/covid.infrastructure';
import { SocketComponent } from './components/socket/socket.component';
import { SocketApplication } from './application/socket.application';
import { SocketInfrastructure } from './infrastructure/socket.infrastructure';

@NgModule({
  declarations: [PageDashboardComponent, CovidComponent, SocketComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    DashboardRoutingModule,
    SharedModule,
  ],
  providers: [
    CovidApplication,
    CovidInfrastructure,
    SocketApplication,
    SocketInfrastructure,
  ],
})
export class DashboardModule {}
