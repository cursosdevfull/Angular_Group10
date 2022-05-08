import { Inject, Injectable } from '@angular/core';
import { StorageInfrastructure } from '../infrastructure/storage.infrastructure';
import { StorageRepository } from '../domain/repositories/storage.repository';

@Injectable()
export class StorageApplication {
  constructor(
    @Inject(StorageInfrastructure) private storage: StorageRepository
  ) {}

  getField(nameProperty: string): string | null {
    return this.storage.getStorage(nameProperty);
  }

  setField(nameProperty: string, value: string): void {
    this.storage.setStorage(nameProperty, value);
  }

  getFieldInToken(fieldName: string): string | string[] {
    return this.storage.getFieldInToken(fieldName);
  }
}
