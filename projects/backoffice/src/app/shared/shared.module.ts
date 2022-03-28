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

@NgModule({
  declarations: [ContainerComponent, TitleComponent, TableComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
  ],
  exports: [
    MatCardModule,
    ContainerComponent,
    TitleComponent,
    MatIconModule,
    MatButtonModule,
    TableComponent,
  ],
})
export class SharedModule {}
