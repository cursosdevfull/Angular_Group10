import { Inject, Injectable } from '@angular/core';
import { INACTIVITY_TOKEN } from '../tokens/inactivity.token';
import { IInactivity } from '../interfaces/inactivity.interface';
import {
  bufferTime,
  from,
  fromEvent,
  merge,
  Observable,
  Subject,
  Subscription,
} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InactivityService {
  timeout: number;
  idleActivity: Observable<any>;
  idle: Observable<any>;
  idleSubscription!: Subscription;

  private idleEvent = new Subject<boolean>();

  constructor(@Inject(INACTIVITY_TOKEN) detectInactivity: IInactivity) {
    this.timeout = detectInactivity.timeout;

    this.idleActivity = merge(
      fromEvent(window, 'mousemove'),
      fromEvent(window, 'keydown'),
      fromEvent(window, 'resize')
    );

    this.idle = from(this.idleActivity);
  }

  startWatching() {
    this.idleEvent.next(false);

    this.idleSubscription = this.idle
      .pipe(bufferTime(this.timeout))
      .subscribe((response) => {
        if (response.length === 0) {
          console.log('user is idle');
          this.lockedSession();
        }
      });
  }

  lockedSession() {
    this.idleEvent.next(true);
    this.stopWatching();
  }

  stopWatching() {
    if (this.idleSubscription) {
      this.idleSubscription.unsubscribe();
    }
  }

  idleObservable(): Observable<any> {
    return this.idleEvent.asObservable();
  }
}
