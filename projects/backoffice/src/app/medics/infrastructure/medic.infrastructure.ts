import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/backoffice/src/environments/environment';
import { Observable } from 'rxjs';
import { StorageApplication } from '../../core/application/storage.application';
import { MedicEntity } from '../domain/entities/medic.entity';
import { MedicRepository } from '../domain/repositories/medic.repository';

@Injectable()
export class MedicInfrastructure implements MedicRepository {
  private pathEndpoint = '';

  constructor(
    private http: HttpClient,
    private storageApplication: StorageApplication
  ) {}

  getPage(page: number): Observable<MedicEntity[]> {
    const accessToken = this.storageApplication.getField('accessToken');
    const headers = new HttpHeaders({ authorization: `Bearer ${accessToken}` });

    return this.http.get<MedicEntity[]>(
      `${environment.apiUrl}/medics/page/${page}/${environment.pageSize}`,
      { headers }
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
