import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createFeatureSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { fromRoot } from '../data';
import { loadMarketItems } from '../data/actions';
import { RootState } from '../data/reducers';
import { Item } from '../types';
import { ApiItems } from './apis/api-items.service';

@Injectable({
  providedIn: 'root',
})
export class MarketFacade {
  public items$: Observable<Item[]> = this.store.select(
    (state) => state.rootState.items
  );
  constructor(private store: Store<any>) {
    this.store.dispatch(loadMarketItems());
  }
}
