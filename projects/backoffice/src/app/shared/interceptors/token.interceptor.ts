import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageApplication } from '../../core/application/storage.application';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private storageApplication: StorageApplication) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.toLowerCase().includes('/users/login')) {
      return next.handle(req);
    }

    const accessToken = this.storageApplication.getField('accessToken');
    const requestCloned = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${accessToken}`),
    });

    return next.handle(requestCloned);
  }
}
