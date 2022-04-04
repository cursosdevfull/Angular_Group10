import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  SimpleChange,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { MetaDataColumn } from '../../interfaces/metadatacolumn.interface';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Output() onChangeSort: EventEmitter<Sort> = new EventEmitter<Sort>();
  @Input() metaData: MetaDataColumn[] = [];
  @Input() subMetaData: MetaDataColumn[] = [];
  @Input() data: any = [];
  @ContentChildren(MatColumnDef, { descendants: true })
  columnsDef!: QueryList<MatColumnDef>;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  widthColumns = '';
  listFields: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  getFields(): string[] {
    return this.metaData.map((item) => item.field);
  }

  changeSort(sort: Sort) {
    this.onChangeSort.emit(sort);
  }

  getAdditionalFields(): string[] {
    this.widthColumns =
      this.subMetaData.length > 0
        ? `1 1 ${100 / this.subMetaData.length}%`
        : '';
    return this.subMetaData.length > 0 ? ['details'] : [];
  }

  ngAfterContentInit() {
    if (!this.columnsDef) {
      return;
    }

    this.columnsDef.forEach((columnDef) => {
      this.listFields.push(columnDef.name);
      this.table?.addColumnDef(columnDef);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['metaData']) {
      this.listFields = this.getFields();
    }
  }
}
