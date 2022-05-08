import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, mergeMap, retry, throwError } from 'rxjs';
import { AuthApplication } from '../../core/application/auth.application';
import { StorageApplication } from '../../core/application/storage.application';
import { Tokens } from '../../core/application/tokens.interface';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private storageApplication: StorageApplication,
    private injector: Injector
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.toLowerCase().includes('/users/login')) {
      return next.handle(req);
    }

    const authApplication: AuthApplication = this.injector.get(AuthApplication);

    const accessToken = this.storageApplication.getField('accessToken');
    const requestCloned = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${accessToken}`),
    });

    return next.handle(requestCloned).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          console.log('Error en el frontend');
          errorMessage = `Error: ${error.error.message}`;
        } else {
          console.log('Error en el backend');
          errorMessage = `Error: ${
            error.error.name ? error.error.name : error.message
          }`;

          if (error.status === 409) {
            console.log('Token expired');
            const refreshToken = this.storageApplication.getField(
              'refreshToken'
            ) as string;

            return authApplication.getNewAccessToken(refreshToken).pipe(
              retry(3),
              mergeMap((response: Tokens) => {
                this.storageApplication.setField(
                  'accessToken',
                  response.accessToken
                );

                const requestCloned = req.clone({
                  headers: req.headers.append(
                    'Authorization',
                    `Bearer ${response.accessToken}`
                  ),
                });

                return next.handle(requestCloned);
              })
            );
          } else if (error.status === 401) {
            console.log('Token modified');
            authApplication.logout();
          }
        }

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
