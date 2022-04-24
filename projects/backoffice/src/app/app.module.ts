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
import { HttpClientModule } from '@angular/common/http';
import { MedicInfrastructure } from './medics/infrastructure/medic.infrastructure';
import { MedicApplication } from './medics/application/medic.application';

const infrastructure = [MedicInfrastructure];
const application = [MedicApplication];
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

@NgModule({
  declarations: [...components],
  imports: [...modules],
  providers: [...otherServices, ...infrastructure, ...application],
  bootstrap: [...bootstrap],
})
export class AppModule {}
