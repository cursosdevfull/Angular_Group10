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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { PageLockScreenComponent } from './pages/page-lock-screen/page-lock-screen.component';
import { LockScreenComponent } from './components/lock-screen/lock-screen.component';
import { AuthInfrastructure } from './infrastructure/auth.infrastructure';
import { AuthApplication } from './application/auth.application';
import { StorageInfrastructure } from './infrastructure/storage.infrastructure';
import { StorageApplication } from './application/storage.application';

const infrastructure = [AuthInfrastructure, StorageInfrastructure];
const application = [AuthApplication, StorageApplication];
@NgModule({
  declarations: [
    PageLoginComponent,
    LoginComponent,
    MenuComponent,
    HeaderComponent,
    PageLockScreenComponent,
    LockScreenComponent,
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
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    PageLoginComponent,
    MenuComponent,
    HeaderComponent,
    PageLockScreenComponent,
  ],
  providers: [...infrastructure, ...application],
})
export class CoreModule {}
