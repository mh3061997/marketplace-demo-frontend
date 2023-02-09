import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { ApiItems } from '../services/apis/api-items.service';
import { loadMarketItems, loadMarketItemsSuccess } from './actions';

@Injectable()
export class RootEffects {
  loadMarketItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMarketItems),
      mergeMap(() =>
        this.itemsService.getMarketItems().pipe(
          map((items) => loadMarketItemsSuccess({ items })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private itemsService: ApiItems) {}
}
