import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Effects } from './effects';
import { EffectsModule } from '@ngrx/effects';
import { marketReducer } from './reducers';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      rootState: marketReducer,
    }),
    EffectsModule.forRoot([Effects]),
  ],
})
export class DataModule {}
