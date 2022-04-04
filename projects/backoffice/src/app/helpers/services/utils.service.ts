import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from '../../shared/components/confirm/confirm.component';

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
}
