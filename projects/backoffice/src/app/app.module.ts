import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { UtilsService } from './helpers/services/utils.service';
import { MatDialogModule } from '@angular/material/dialog';
import { LayoutModule } from './config/modules/layout.module';
import { LAYOUT_CONSTANTS } from './config/constants/layout.constant';
import { InactivityModule } from './config/modules/inactivity.module';
import { INACTIVITY_CONSTANTS } from './config/constants/inactivity.constant';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MedicInfrastructure } from './medics/infrastructure/medic.infrastructure';
import { MedicApplication } from './medics/application/medic.application';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { DriverInfrastructure } from './drivers/infrastructure/driver.infrastructure';
import { DriverApplication } from './drivers/application/driver.application';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Paginator } from './shared/classes/paginator';
import { IconService } from './helpers/services/icon.service';

const infrastructure = [MedicInfrastructure, DriverInfrastructure];
const application = [MedicApplication, DriverApplication];
const components = [
  AppComponent,
  TestComponent,
  HomeComponent,
  BookComponent,
  PadreComponent,
  HijoComponent,
];
const bootstrap = [AppComponent];
const otherServices = [UtilsService];
const interceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
];
const modules = [
  BrowserModule,
  CoreModule,
  BrowserAnimationsModule,
  MatSidenavModule,
  AppRoutingModule,
  MatDialogModule,
  LayoutModule.forRoot(LAYOUT_CONSTANTS),
  InactivityModule.forRoot(INACTIVITY_CONSTANTS),
  HttpClientModule,
];

const material = [{ provide: MatPaginatorIntl, useClass: Paginator }];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  providers: [
    ...otherServices,
    ...infrastructure,
    ...application,
    ...interceptors,
    ...material,
  ],
  bootstrap: [...bootstrap],
})
export class AppModule {
  constructor(private iconService: IconService) {}
}
