import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicsRoutingModule } from './medics-routing.module';
import { PageMedicsComponent } from './pages/page-medics/page-medics.component';


@NgModule({
  declarations: [
    PageMedicsComponent
  ],
  imports: [
    CommonModule,
    MedicsRoutingModule
  ]
})
export class MedicsModule { }
