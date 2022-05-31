import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataCovid } from '../domain/entities/data-covid';
import { SocketRepository } from '../domain/repositories/socket.repository';
import { SocketInfrastructure } from '../infrastructure/socket.infrastructure';

@Injectable()
export class SocketApplication {
  constructor(@Inject(SocketInfrastructure) private socket: SocketRepository) {}

  listen(eventName: string): Observable<DataCovid[]> {
    return this.socket.listen(eventName);
  }
}
