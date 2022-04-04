import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';

@Component({
  selector: 'amb-page-drivers',
  templateUrl: './page-drivers.component.html',
  styleUrls: ['./page-drivers.component.css'],
})
export class PageDriversComponent implements OnInit {
  metaData: MetaDataColumn[] = [
    { field: 'name', header: 'Name', sortable: true },
    { field: 'lastname', header: 'Lastname', sortable: true },
    /*     { field: 'email', header: 'Email', sortable: true },
    { field: 'phone', header: 'Phone', sortable: true },
    { field: 'status', header: 'Status', sortable: true }, */
  ];

  subMetaData: MetaDataColumn[] = [
    { field: 'email', header: 'Email', sortable: true },
    { field: 'phone', header: 'Phone', sortable: true },
    { field: 'status', header: 'Status', sortable: true },
  ];

  data = [
    {
      name: 'Blanca',
      lastname: 'Garcia',
      email: 'email01@email.com',
      phone: '123456789',
      status: 'Activo',
      driverLicense: '123456789',
    },
    {
      name: 'Sergio',
      lastname: 'Perez',
      email: 'sergio.perez@correo.com',
      phone: '123456789',
      status: 'Activo',
      driverLicense: '123456789',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  changeSort(sort: Sort) {
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
  }
}
