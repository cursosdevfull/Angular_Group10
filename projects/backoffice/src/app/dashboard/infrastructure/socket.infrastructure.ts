import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { DataCovid } from '../domain/entities/data-covid';
import { SocketRepository } from '../domain/repositories/socket.repository';
import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';

@Injectable()
export class SocketInfrastructure implements SocketRepository {
  socket: any;

  constructor() {
    this.socket = io.connect(environment.apiSocket);
  }

  listen(eventName: string): Observable<DataCovid[]> {
    return new Observable((observer: Observer<DataCovid[]>) => {
      this.socket.on(eventName, (data: DataCovid[]) => observer.next(data));
    });
  }
}
