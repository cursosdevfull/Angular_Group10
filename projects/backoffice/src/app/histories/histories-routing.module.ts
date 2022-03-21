import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHistoriesComponent } from './pages/page-histories/page-histories.component';

const routes: Routes = [
  {
    path: '',
    component: PageHistoriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriesRoutingModule {}
