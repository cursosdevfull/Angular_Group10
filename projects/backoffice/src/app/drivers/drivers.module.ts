import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { PageDriversComponent } from './pages/page-drivers/page-drivers.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageDriversComponent],
  imports: [CommonModule, DriversRoutingModule, SharedModule],
})
export class DriversModule {}
