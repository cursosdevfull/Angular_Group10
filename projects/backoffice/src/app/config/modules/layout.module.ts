import { ModuleWithProviders, NgModule } from '@angular/core';
import { ILayout } from '../interfaces/layout.interface';
import { LAYOUT_TOKEN } from '../tokens/layout.token';

@NgModule()
export class LayoutModule {
  static forRoot(config: ILayout): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: [{ provide: LAYOUT_TOKEN, useValue: config }],
    };
  }
}
