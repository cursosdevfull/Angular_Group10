import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';
import { UtilsService } from '../../../helpers/services/utils.service';
import { BaseComponent } from '../../../shared/classes/base-component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'amb-page-medics',
  templateUrl: './page-medics.component.html',
  styleUrls: ['./page-medics.component.css'],
})
export class PageMedicsComponent extends BaseComponent implements OnInit {
  metaData: MetaDataColumn[] = [
    { field: 'name', header: 'Name', sortable: true },
    { field: 'cmp', header: 'CMP', sortable: true },
    { field: 'age', header: 'Age', sortable: true },
  ];
  data = [
    { id: 1, name: 'John', cmp: '45236', age: '45' },
    { id: 2, name: 'Robert', cmp: '3536', age: '50' },
    { id: 3, name: 'John', cmp: '45236', age: '45' },
    { id: 4, name: 'Robert', cmp: '3536', age: '50' },
  ];

  constructor(protected override utilsService: UtilsService) {
    super(utilsService);
  }

  ngOnInit(): void {}

  openForm(row: any = null) {
    this.utilsService.showModal(FormComponent, {
      panelClass: 'form-modal',
      //width: '600px',
      data: row,
      disableClose: true,
    });
  }

  /*  delete(row: any) {
    const response = this.utilsService.showConfirm('Delete it? are you sure?');

    response.subscribe((result) => {
      if (!result) {
        return;
      }

      if (result === 'yes') {
        const position = this.data.findIndex((item) => item.id === row.id);
        const elements = [...this.data];
        elements.splice(position, 1);
        this.data = elements;
      }
    });
  } */
}
