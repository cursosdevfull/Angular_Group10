import { ModuleWithProviders, NgModule } from '@angular/core';
import { IInactivity } from '../interfaces/inactivity.interface';
import { INACTIVITY_TOKEN } from '../tokens/inactivity.token';

@NgModule()
export class InactivityModule {
  static forRoot(config: IInactivity): ModuleWithProviders<InactivityModule> {
    return {
      ngModule: InactivityModule,
      providers: [
        {
          provide: INACTIVITY_TOKEN,
          useValue: config,
        },
      ],
    };
  }
}
