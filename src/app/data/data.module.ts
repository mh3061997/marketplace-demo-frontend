import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootEffects } from './effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { fromRoot } from '.';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot([fromRoot.RootEffects]),
    StoreModule.forRoot({
      rootState: fromRoot.rootReducer,
    }),
    StoreDevtoolsModule.instrument({}),
  ],
})
export class DataModule {}
