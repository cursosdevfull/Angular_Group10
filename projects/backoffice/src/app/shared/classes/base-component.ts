import { UtilsService } from '../../helpers/services/utils.service';
import { MetaDataColumn } from '../interfaces/metadatacolumn.interface';
export abstract class BaseComponent {
  abstract data: any;
  abstract metaDataColumns: MetaDataColumn[];
  abstract titleSheetExportToExcel: string;
  abstract fileNameExportToExcel: string;

  constructor(protected utilsService: UtilsService) {}

  delete(row: any) {
    const response = this.utilsService.showConfirm('Delete it? are you sure?');

    response.subscribe((result) => {
      if (!result) {
        return;
      }

      if (result === 'yes') {
        const position = this.data.findIndex((item: any) => item.id === row.id);
        const elements = [...this.data];
        elements.splice(position, 1);
        this.data = elements;
      }
    });
  }

  exportToExcel() {
    console.log(this.data);
    console.log(this.metaDataColumns);
    console.log(this.fileNameExportToExcel);
    console.log(this.titleSheetExportToExcel);

    this.utilsService.exportToExcel(
      this.data,
      this.metaDataColumns,
      this.fileNameExportToExcel,
      this.titleSheetExportToExcel
    );
  }
}
