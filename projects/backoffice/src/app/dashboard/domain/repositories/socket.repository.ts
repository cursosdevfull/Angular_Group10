import { Observable } from 'rxjs';
import { DataCovid } from '../entities/data-covid';

export interface SocketRepository {
  listen(eventName: string): Observable<DataCovid[]>;
}
