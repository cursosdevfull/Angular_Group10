import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';
import { UtilsService } from '../../../helpers/services/utils.service';
import { BaseComponent } from '../../../shared/classes/base-component';
import { FormComponent } from '../../components/form/form.component';
import {
  MedicEntity,
  MedicPropertiesOptional,
  MedicPropertiesRequired,
} from '../../domain/entities/medic.entity';
import { MedicApplication } from '../../application/medic.application';

@Component({
  selector: 'amb-page-medics',
  templateUrl: './page-medics.component.html',
  styleUrls: ['./page-medics.component.css'],
})
export class PageMedicsComponent extends BaseComponent implements OnInit {
  metaData: MetaDataColumn[] = [
    { field: 'name', header: 'Name', sortable: true },
    { field: 'lastname', header: 'Lastname', sortable: true },
    { field: 'surname', header: 'Surname', sortable: true },
    { field: 'email', header: 'Email', sortable: true },
    { field: 'cmp', header: 'CMP', sortable: true },
  ];
  data: MedicEntity[] = [];

  constructor(
    protected override utilsService: UtilsService,
    private medicApplication: MedicApplication
  ) {
    super(utilsService);
  }

  ngOnInit(): void {
    this.getPage(0);
  }

  getPage(page: number): void {
    this.medicApplication.getPage(page).subscribe((data) => {
      this.data = data;
    });
  }

  openForm(row: any = null) {
    this.utilsService.showModal(FormComponent, {
      panelClass: 'form-modal',
      //width: '600px',
      data: row,
      disableClose: true,
    });
  }
}
