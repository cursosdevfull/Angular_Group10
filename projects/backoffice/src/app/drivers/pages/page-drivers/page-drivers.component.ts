import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { UtilsService } from '../../../helpers/services/utils.service';
import { BaseComponent } from '../../../shared/classes/base-component';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';
import { ResultPage } from '../../../shared/interfaces/result-page.interface';
import { DriverApplication } from '../../application/driver.application';
import { DriverEntity } from '../../domain/entities/driver.entity';

@Component({
  selector: 'amb-page-drivers',
  templateUrl: './page-drivers.component.html',
  styleUrls: ['./page-drivers.component.css'],
})
export class PageDriversComponent extends BaseComponent implements OnInit {
  metaData: MetaDataColumn[] = [
    { field: 'nombre', header: 'Name', sortable: true },
  ];
  metaDataColumns: MetaDataColumn[] = [
    { field: 'nombre', header: 'Name', sortable: true },
  ];
  titleSheetExportToExcel: string = 'List of Drivers';
  fileNameExportToExcel: string = 'drivers';
  additionalInformationExcel = {};

  data: DriverEntity[] = [];

  constructor(
    protected override utilsService: UtilsService,
    private driverApplication: DriverApplication
  ) {
    super(utilsService);
  }

  ngOnInit(): void {
    this.getPage(0);
  }

  getPage(page: number): void {
    this.driverApplication
      .getPage(page)
      .subscribe((data: ResultPage<DriverEntity>) => {
        this.data = data.records;
      });
  }

  openForm(row: any = null) {
    /* this.utilsService.showModal(FormComponent, {
      panelClass: 'form-modal',
      //width: '600px',
      data: row,
      disableClose: true,
    }); */
  }

  /*   changeSort(sort: Sort) {
    if (sort.active && sort.direction) {
      console.log(sort);
      this.data = [
        ...this.data.sort((a, b) => {
          const isAsc = sort.direction.toUpperCase() === 'ASC';
          switch (sort.active) {
            case 'name':
              return this.compare(a.name, b.name, isAsc);
            case 'lastname':
              return this.compare(a.lastname, b.lastname, isAsc);
            case 'email':
              return this.compare(a.email, b.email, isAsc);
            case 'phone':
              return this.compare(a.phone, b.phone, isAsc);
            case 'status':
              return this.compare(a.status, b.status, isAsc);
            default:
              return 0;
          }
        }),
      ];
    }
  }

  compare(fieldA: number | string, fieldB: number | string, isAsc: boolean) {
    return (isAsc ? 1 : -1) * (fieldA < fieldB ? -1 : 1);
  } */
}
