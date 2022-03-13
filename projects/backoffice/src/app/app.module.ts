import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [AppComponent, TestComponent, HomeComponent, BookComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
