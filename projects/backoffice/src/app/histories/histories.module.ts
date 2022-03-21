import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriesRoutingModule } from './histories-routing.module';
import { PageHistoriesComponent } from './pages/page-histories/page-histories.component';


@NgModule({
  declarations: [
    PageHistoriesComponent
  ],
  imports: [
    CommonModule,
    HistoriesRoutingModule
  ]
})
export class HistoriesModule { }
