import { Injectable } from '@angular/core';
import { StorageRepository } from '../domain/repositories/storage.repository';
import jwtDecode from 'jwt-decode';

interface IPayload {
  name: string;
  email: string;
  roles: string[];
}

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

  getFieldInToken(field: string): string | string[] {
    const accessToken = this.getStorage('accessToken') as string;
    const payload: any = jwtDecode(accessToken) as IPayload;

    return payload[field];
  }
}
