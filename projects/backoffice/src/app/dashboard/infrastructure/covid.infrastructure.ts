import { map, Observable } from 'rxjs';
import { CovidModel } from '../domain/models/covid.model';
import { CovidRepository } from '../domain/repositories/covid.repository';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class CovidInfrastructure implements CovidRepository {
  constructor(private http: HttpClient) {}

  getCovidData(): Observable<CovidModel[]> {
    return this.http
      .get<CovidModel[]>(environment.apiCovid)
      .pipe(map((data: CovidModel[]) => data.slice(0, 30)));
  }
}
