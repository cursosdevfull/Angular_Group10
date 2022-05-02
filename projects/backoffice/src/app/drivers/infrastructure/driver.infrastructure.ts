import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/backoffice/src/environments/environment';
import { Observable } from 'rxjs';
import { ResultPage } from '../../shared/interfaces/result-page.interface';
import { DriverEntity } from '../domain/entities/driver.entity';
import { DriverRepository } from '../domain/repositories/driver.repository';

@Injectable()
export class DriverInfrastructure implements DriverRepository {
  private pathEndpoint = '';

  constructor(private http: HttpClient) {}

  getPage(page: number): Observable<ResultPage<DriverEntity>> {
    return this.http.get<ResultPage<DriverEntity>>(
      `${environment.apiUrl}/drivers/page/${page}/${environment.pageSize}`
    );
  }
  delete(id: number): Observable<DriverEntity> {
    throw new Error('Method not implemented.');
  }
  update(id: number, driver: DriverEntity): Observable<DriverEntity> {
    throw new Error('Method not implemented.');
  }
  insert(driver: DriverEntity): Observable<DriverEntity> {
    throw new Error('Method not implemented.');
  }
  list(): Observable<DriverEntity[]> {
    throw new Error('Method not implemented.');
  }
}
