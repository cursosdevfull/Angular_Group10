import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthEntity } from '../domain/entities/auth.entity';
import { AuthRepository } from '../domain/repositories/auth.repository';
import { HttpClient } from '@angular/common/http';
import { environment } from 'projects/backoffice/src/environments/environment';
import { Tokens } from '../application/tokens.interface';

@Injectable()
export class AuthInfrastructure implements AuthRepository {
  constructor(private http: HttpClient) {}

  login(auth: AuthEntity): Observable<Tokens> {
    return this.http.post<Tokens>(`${environment.apiUrl}/users/login`, auth);
  }

  getNewAccessToken(refreshToken: string): Observable<Tokens> {
    return this.http.get<Tokens>(
      `${environment.apiUrl}/users/refresh/${refreshToken}`
    );
  }
}
