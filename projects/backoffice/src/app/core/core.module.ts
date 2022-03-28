import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    PageLoginComponent,
    LoginComponent,
    MenuComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
  ],
  exports: [PageLoginComponent, MenuComponent, HeaderComponent],
})
export class CoreModule {}
