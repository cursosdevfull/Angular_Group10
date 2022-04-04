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

@NgModule({
  declarations: [
    ContainerComponent,
    TitleComponent,
    TableComponent,
    ConfirmComponent,
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
  ],
})
export class SharedModule {}