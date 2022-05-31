import { Observable } from 'rxjs';
import { CovidModel } from '../models/covid.model';

export interface CovidRepository {
  getCovidData(): Observable<CovidModel[]>;
}
