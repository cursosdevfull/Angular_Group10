import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicsRoutingModule } from './medics-routing.module';
import { PageMedicsComponent } from './pages/page-medics/page-medics.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageMedicsComponent, FormComponent],
  imports: [
    CommonModule,
    MedicsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class MedicsModule {}
