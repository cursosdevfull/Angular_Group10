import { Observable } from 'rxjs';
import { ResultPage } from '../../../shared/interfaces/result-page.interface';
import { MedicEntity } from '../entities/medic.entity';

export interface MedicRepository {
  getPage(page: number): Observable<ResultPage<MedicEntity>>;
  delete(id: number): Observable<MedicEntity>;
  update(id: number, medic: FormData): Observable<MedicEntity>;
  insert(medic: FormData): Observable<MedicEntity>;
  list(): Observable<MedicEntity[]>;
}
