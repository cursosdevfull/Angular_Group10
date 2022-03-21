import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';

const routes: Routes = [
  {
    path: '',
    component: PageLoginComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'medics',
    loadChildren: () =>
      import('./medics/medics.module').then((m) => m.MedicsModule),
  },
  {
    path: 'drivers',
    loadChildren: () =>
      import('./drivers/drivers.module').then((m) => m.DriversModule),
  },
  {
    path: 'histories',
    loadChildren: () =>
      import('./histories/histories.module').then((m) => m.HistoriesModule),
  },
  /*  {
    path: 'medics',
    component: MedicsComponent,
  },
  {
    path: 'drivers',
    component: DriversComponent,
  },
  {
    path: 'histories',
    component: HistoriesComponent,
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
