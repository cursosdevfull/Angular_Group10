import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILayout } from '../interfaces/layout.interface';
import { LAYOUT_TOKEN } from '../tokens/layout.token';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private configSubject: BehaviorSubject<ILayout>;

  constructor(@Inject(LAYOUT_TOKEN) private config: ILayout) {
    this.configSubject = new BehaviorSubject<ILayout>(this.config);
  }

  set configuration(value: any) {
    let config = this.configSubject.getValue();
    config = Object.assign(config, value);
    this.configSubject.next(config);
  }

  get configuration(): any {
    return this.configSubject.asObservable();
  }
}
