import { Component, OnInit } from '@angular/core';
import { CovidApplication } from '../../application/covid.application';
import { DataCovid } from '../../domain/entities/data-covid';
import { CovidModel } from '../../domain/models/covid.model';

@Component({
  selector: 'amb-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css'],
})
export class CovidComponent implements OnInit {
  view: [number, number] = [700, 450];
  scheme = 'natural';
  xAxis = true;
  yAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  yAxisLabel = 'Casos confirmados';
  xAxisLabel = 'Países';
  legend = false;
  legendTitle = '';

  dataCovid: DataCovid[] = [];

  constructor(private covidApplication: CovidApplication) {}

  ngOnInit(): void {
    this.covidApplication.getCovidData().subscribe((data) => {
      this.dataCovid = data.map((covid: CovidModel) => ({
        name: covid.countryRegion,
        value: covid.confirmed,
      }));
    });
  }
}
