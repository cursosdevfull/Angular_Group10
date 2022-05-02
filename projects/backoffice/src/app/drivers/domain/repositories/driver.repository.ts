import { Observable } from 'rxjs';
import { ResultPage } from '../../../shared/interfaces/result-page.interface';
import { DriverEntity } from '../entities/driver.entity';

export interface DriverRepository {
  getPage(page: number): Observable<ResultPage<DriverEntity>>;
  delete(id: number): Observable<DriverEntity>;
  update(id: number, driver: DriverEntity): Observable<DriverEntity>;
  insert(driver: DriverEntity): Observable<DriverEntity>;
  list(): Observable<DriverEntity[]>;
}
