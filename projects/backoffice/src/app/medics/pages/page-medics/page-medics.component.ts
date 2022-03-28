import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';

@Component({
  selector: 'amb-page-medics',
  templateUrl: './page-medics.component.html',
  styleUrls: ['./page-medics.component.css'],
})
export class PageMedicsComponent implements OnInit {
  metaData: MetaDataColumn[] = [
    { field: 'name', header: 'Name', sortable: true },
    { field: 'cmp', header: 'CMP', sortable: true },
    { field: 'age', header: 'Age', sortable: true },
  ];
  data = [
    { name: 'John', cmp: '45236', age: '45' },
    { name: 'Robert', cmp: '3536', age: '50' },
    { name: 'John', cmp: '45236', age: '45' },
    { name: 'Robert', cmp: '3536', age: '50' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
