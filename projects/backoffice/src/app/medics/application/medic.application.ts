import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicEntity } from '../domain/entities/medic.entity';
import { MedicInfrastructure } from '../infrastructure/medic.infrastructure';
import { MedicRepository } from '../domain/repositories/medic.repository';

@Injectable()
export class MedicApplication {
  constructor(
    @Inject(MedicInfrastructure) private repository: MedicRepository
  ) {}

  getPage(page: number): Observable<MedicEntity[]> {
    return this.repository.getPage(page);
  }

  delete(id: number): Observable<MedicEntity> {
    return this.repository.delete(id);
  }

  update(id: number, medic: MedicEntity): Observable<MedicEntity> {
    return this.repository.update(id, medic);
  }

  insert(medic: MedicEntity): Observable<MedicEntity> {
    return this.repository.insert(medic);
  }

  list(): Observable<MedicEntity[]> {
    return this.repository.list();
  }
}
