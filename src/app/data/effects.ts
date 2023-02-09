import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { ApiItems } from '../services/apis/api-items.service';
import { LoadMarketItems, LoadMarketItemsSuccess } from './actions';

@Injectable()
export class Effects {
  loadMarketItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadMarketItems),
      mergeMap(() =>
        this.itemsService.getMarketItems().pipe(
          map((items) => LoadMarketItemsSuccess({ items })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private itemsService: ApiItems) {}
}
