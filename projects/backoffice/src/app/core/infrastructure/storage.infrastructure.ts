import { Injectable } from '@angular/core';
import { StorageRepository } from '../domain/repositories/storage.repository';

@Injectable()
export class StorageInfrastructure implements StorageRepository {
  setStorage(nameProperty: string, value: string): void {
    sessionStorage.setItem(nameProperty, value);
  }
  getStorage(nameProperty: string): string | null {
    return sessionStorage.getItem(nameProperty);
  }
  clear(): void {
    sessionStorage.clear();
  }
}
