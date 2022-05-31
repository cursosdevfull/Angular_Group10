import { Component, OnInit } from '@angular/core';
import { SocketApplication } from '../../application/socket.application';
import { DataCovid } from '../../domain/entities/data-covid';

@Component({
  selector: 'amb-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css'],
})
export class SocketComponent implements OnInit {
  dataCovid: DataCovid[] = [];

  view: [number, number] = [700, 450];
  scheme = 'natural';

  legend = true;
  legendPosition = ['right', 'below'];
  legendTitle = 'Vacunas';
  gradient = true;
  doughnut = true;

  constructor(private socket: SocketApplication) {}

  ngOnInit(): void {
    this.socket.listen('dataupdate').subscribe((data: DataCovid[]) => {
      this.dataCovid = data;
    });
  }
}
