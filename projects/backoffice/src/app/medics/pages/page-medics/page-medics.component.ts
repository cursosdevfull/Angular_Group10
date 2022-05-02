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
import { ResultPage } from '../../../shared/interfaces/result-page.interface';

@Component({
  selector: 'amb-page-medics',
  templateUrl: './page-medics.component.html',
  styleUrls: ['./page-medics.component.css'],
})
export class PageMedicsComponent extends BaseComponent implements OnInit {
  metaData: MetaDataColumn[] = [
    { field: 'nombre', header: 'Name', sortable: true },
    { field: 'apellido', header: 'Lastname', sortable: true },
    { field: 'segundo_nombre', header: 'Surname', sortable: true },
    { field: 'correo', header: 'Email', sortable: true },
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
    this.medicApplication
      .getPage(page)
      .subscribe((data: ResultPage<MedicEntity>) => {
        this.data = data.records;
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
