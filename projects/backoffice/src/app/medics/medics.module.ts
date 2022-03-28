import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicsRoutingModule } from './medics-routing.module';
import { PageMedicsComponent } from './pages/page-medics/page-medics.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageMedicsComponent],
  imports: [CommonModule, MedicsRoutingModule, SharedModule],
})
export class MedicsModule {}
