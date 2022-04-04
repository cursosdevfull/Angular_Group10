import { UtilsService } from '../../helpers/services/utils.service';
export abstract class BaseComponent {
  abstract data: any;

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
}
