import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from '../../shared/components/confirm/confirm.component';
import { MetaDataColumn } from '../../shared/interfaces/metadatacolumn.interface';
import * as XLSX from 'xlsx';

declare var require: any;

const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
    sheetTitle: string,
    additionalInformation: { [s: string]: string }
  ) {
    const result = this.dtoExcel(data, metaDataColumns);
    // result.unshift(additionalInformation);
    console.log(result);
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([
      additionalInformation,
    ]);
    XLSX.utils.sheet_add_json(ws, result, { origin: 'A3' });
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, sheetTitle.toUpperCase());
    XLSX.writeFile(wb, fileName + '.xlsx');
  }

  async exportToPdf(
    data: any[],
    metaDataColumns: MetaDataColumn[],
    fileName: string,
    titleReport: string
  ) {
    const blob = await fetch('/assets/img/logos/logo.jpg').then((r) =>
      r.blob()
    );
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });

    const dataFormatted = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [20, 20, 20, 20],
      content: [
        this.generateTableHeader(data, dataUrl, titleReport.toUpperCase()),
        this.generateTableData(data, metaDataColumns),
      ],
      styles: this.generateStyles(),
    };

    this.generatePDF(dataFormatted, fileName);
  }

  private generateTableHeader(data: any[], dataUrl: any, titleReport: string) {
    return {
      margin: [0, 0, 0, 15],
      table: {
        widths: [120, 'auto', 50, 'auto'],
        body: [
          [
            {
              borderWidth: ['1px', '1px', '1px', '1px'],
              borderColor: ['#000', '#000', '#000', '#000'],
              border: [false, false, true, false],
              width: 100,
              image: dataUrl,
            },
            {
              border: [false, false, false, false],
              text: [
                this.generatedColumn('Chanel Company\n', 'headerLeft'),
                this.generatedColumn(
                  'Av. de la República, N° 5\n',
                  'subHeaderLeft'
                ),
                this.generatedColumn(
                  'San Isidro, Lima Perú\n',
                  'subHeaderLeft'
                ),
                this.generatedColumn(
                  'Tel: (591) 2-2222-2222\n',
                  'subHeaderLeft'
                ),
                this.generatedColumn('info@chanel.com\n', 'subHeaderLeft'),
                this.generatedColumn('www.chanel.com\n', 'subHeaderLeft'),
              ],
            },
            {
              border: [false, false, false, false],
              text: '',
            },
            {
              border: [false, false, false, false],
              text: titleReport,
              style: 'titleReport',
            },
          ],
        ],
      },
    };
  }

  private generateTableData(data: any[], metaDataColumns: MetaDataColumn[]) {
    const body = data.map((el: any) =>
      Object.keys(el).map((prop: string) =>
        this.generateRowData(el, metaDataColumns, prop)
      )
    );

    console.log(body);

    const length = Object.keys(data[0]).length;
    const widths = Array.from(Array(10).keys()).map(
      (el) => Math.floor(100 / length) + '%'
    );

    return {
      margin: [0, 0, 0, 15],
      table: {
        widths,
        body,
      },
    };
  }

  private generateRowData(
    data: any,
    metaDataColumns: MetaDataColumn[],
    key: string
  ) {
    const column = metaDataColumns.find(
      (el: MetaDataColumn) => el.field === key
    );
    if (column) {
      return [
        {
          border: [false, false, true, false],
          borderWidth: ['1px', '1px', '1px', '1px'],
          borderColor: ['#000', '#000', '#000', '#000'],
          text: data[key],
        },
      ];
    } else {
      return [];
    }
  }

  private generatedColumn(text: string, style: any = null) {
    const column: any = { text };
    if (style) {
      column.style = style;
    }

    return column;
  }

  private generateStyles() {
    return {
      headerLeft: {
        fontFamily: 'Verdana',
        fontSize: 13,
        height: 16,
        color: '#3c3b40',
      },
      subHeaderLeft: {
        fontFamily: 'Verdana',
        fontSize: 10,
        height: 16,
        color: '#3c3b40',
      },
      titleReport: {
        fontFamily: 'Verdana',
        fontSize: 15,
        height: 16,
        color: '#3c3b40',
      },
    };
  }

  private generatePDF(dataFormatted: any, fileName: string) {
    const docGenerated = pdfMake.createPdf(dataFormatted);
    docGenerated.download(fileName + '.pdf');
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
