import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
} from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MetaDataColumn } from '../../interfaces/metadatacolumn.interface';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Output() onChangeSort: EventEmitter<Sort> = new EventEmitter<Sort>();
  @Input() metaData: MetaDataColumn[] = [];

  @Input() data: any = [
    { name: 'Sergio', lastname: 'Perez' },
    { name: 'Juan', lastname: 'Perez' },
    { name: 'Pedro', lastname: 'Perez' },
    { name: 'Juan', lastname: 'Perez' },
    { name: 'Pedro', lastname: 'Perez' },
    { name: 'Juan', lastname: 'Perez' },
  ];

  constructor() {}

  ngOnInit(): void {}

  getFields(): string[] {
    return this.metaData.map((item) => item.field);
  }

  changeSort(sort: Sort) {
    this.onChangeSort.emit(sort);
  }
}
