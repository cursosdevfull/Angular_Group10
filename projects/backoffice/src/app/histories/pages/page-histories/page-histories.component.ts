import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';

@Component({
  selector: 'amb-page-histories',
  templateUrl: './page-histories.component.html',
  styleUrls: ['./page-histories.component.css'],
})
export class PageHistoriesComponent implements OnInit {
  metaData: MetaDataColumn[] = [
    { field: 'patient', header: 'Patient Name', sortable: true },
    { field: 'doctor', header: 'Doctor Name', sortable: true },
    { field: 'date', header: 'Date', sortable: true },
    { field: 'status', header: 'Status', sortable: true },
    { field: 'time', header: 'Time', sortable: true },
  ];

  data = [
    {
      patient: 'Jorge Castro',
      doctor: 'Dr. Juan',
      date: '10/10/2020',
      time: '10:00',
      status: 'Pendiente',
    },
    {
      patient: 'Jorge Castro',
      doctor: 'Dr. Juan',
      date: '10/10/2020',
      time: '10:00',
      status: 'Pendiente',
    },
    {
      patient: 'Jorge Castro',
      doctor: 'Dr. Juan',
      date: '10/10/2020',
      time: '10:00',
      status: 'Pendiente',
    },
    {
      patient: 'Jorge Castro',
      doctor: 'Dr. Juan',
      date: '10/10/2020',
      time: '10:00',
      status: 'Pendiente',
    },
    {
      patient: 'Jorge Castro',
      doctor: 'Dr. Juan',
      date: '10/10/2020',
      time: '10:00',
      status: 'Pendiente',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
