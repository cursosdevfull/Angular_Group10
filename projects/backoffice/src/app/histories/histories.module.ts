import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriesRoutingModule } from './histories-routing.module';
import { PageHistoriesComponent } from './pages/page-histories/page-histories.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageHistoriesComponent],
  imports: [CommonModule, HistoriesRoutingModule, SharedModule],
})
export class HistoriesModule {}
