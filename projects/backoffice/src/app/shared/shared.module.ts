import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ContainerComponent } from './components/container/container.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleComponent } from './components/title/title.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { TableComponent } from './components/table/table.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';
import { MatInputModule } from '@angular/material/input';
import { PhotoComponent } from './components/photo/photo.component';
import { UploadDirective } from './directives/upload.directive';
import { WebcamModule } from 'ngx-webcam';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: false,
};

@NgModule({
  declarations: [
    ContainerComponent,
    TitleComponent,
    TableComponent,
    ConfirmComponent,
    PhotoComponent,
    UploadDirective,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    WebcamModule,
    MatSlideToggleModule,
  ],
  exports: [
    MatCardModule,
    ContainerComponent,
    TitleComponent,
    MatIconModule,
    MatButtonModule,
    TableComponent,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    ConfirmComponent,
    MatToolbarModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    MatFormFieldModule,
    MatInputModule,
    PhotoComponent,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class SharedModule {}
