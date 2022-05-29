import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from '../../shared/components/confirm/confirm.component';
import { MetaDataColumn } from '../../shared/interfaces/metadatacolumn.interface';
import * as XLSX from 'xlsx';

@Injectable()
export class UtilsService {
  constructor(private dialog: MatDialog) {}

  showConfirm(messageToShow: string = '') {
    const reference = this.dialog.open(ConfirmComponent, {
      width: '340px',
      disableClose: true,
    });

    if (messageToShow) {
      reference.componentInstance.messageToShow = messageToShow;
    }

    return reference.afterClosed();
  }

  showModal(
    classComponent: any,
    options: { [s: string]: string | boolean | number | object }
  ): MatDialogRef<any> {
    return this.dialog.open(classComponent, options);
  }

  exportToExcel(
    data: any[],
    metaDataColumns: MetaDataColumn[],
    fileName: string,
    sheetTitle: string
  ) {
    const result = this.dtoExcel(data, metaDataColumns);
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(result);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, sheetTitle.toUpperCase());
    XLSX.writeFile(wb, fileName + '.xlsx');
  }

  private dtoExcel(
    data: any[],
    metaDataColumns: MetaDataColumn[]
  ): { [s: string]: string }[] {
    return data.map((item: any) => {
      const newElement: { [s: string]: string } = {};
      for (const prop in item) {
        const metaData = metaDataColumns.find((el) => el.field === prop);
        if (metaData) {
          newElement[metaData.header] = item[prop];
        }
      }

      return newElement;
    });
  }
}
