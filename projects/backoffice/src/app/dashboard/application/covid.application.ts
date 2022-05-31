import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidModel } from '../domain/models/covid.model';
import { CovidRepository } from '../domain/repositories/covid.repository';
import { CovidInfrastructure } from '../infrastructure/covid.infrastructure';

@Injectable()
export class CovidApplication {
  constructor(
    @Inject(CovidInfrastructure) private repository: CovidRepository
  ) {}

  getCovidData(): Observable<CovidModel[]> {
    return this.repository.getCovidData();
  }
}
