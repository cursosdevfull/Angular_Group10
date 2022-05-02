import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/backoffice/src/environments/environment';
import { Observable } from 'rxjs';
import { ResultPage } from '../../shared/interfaces/result-page.interface';
import { MedicEntity } from '../domain/entities/medic.entity';
import { MedicRepository } from '../domain/repositories/medic.repository';

@Injectable()
export class MedicInfrastructure implements MedicRepository {
  private pathEndpoint = '';

  constructor(private http: HttpClient) {}

  getPage(page: number): Observable<ResultPage<MedicEntity>> {
    return this.http.get<ResultPage<MedicEntity>>(
      `${environment.apiUrl}/medics/page/${page}/${environment.pageSize}`
    );
  }
  delete(id: number): Observable<MedicEntity> {
    throw new Error('Method not implemented.');
  }
  update(id: number, medic: MedicEntity): Observable<MedicEntity> {
    throw new Error('Method not implemented.');
  }
  insert(medic: MedicEntity): Observable<MedicEntity> {
    throw new Error('Method not implemented.');
  }
  list(): Observable<MedicEntity[]> {
    throw new Error('Method not implemented.');
  }
}
