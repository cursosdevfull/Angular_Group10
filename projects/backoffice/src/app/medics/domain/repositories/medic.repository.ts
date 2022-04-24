import { Observable } from 'rxjs';
import { MedicEntity } from '../entities/medic.entity';

export interface MedicRepository {
  getPage(page: number): Observable<MedicEntity[]>;
  delete(id: number): Observable<MedicEntity>;
  update(id: number, medic: MedicEntity): Observable<MedicEntity>;
  insert(medic: MedicEntity): Observable<MedicEntity>;
  list(): Observable<MedicEntity[]>;
}
