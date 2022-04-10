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

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    BookComponent,
    PadreComponent,
    HijoComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    AppRoutingModule,
    MatDialogModule,
    LayoutModule.forRoot(LAYOUT_CONSTANTS),
    InactivityModule.forRoot(INACTIVITY_CONSTANTS),
  ],
  providers: [
    // {provide: UtilsService, useClass: UtilsService},
    UtilsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
