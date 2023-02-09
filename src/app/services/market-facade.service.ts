import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoadMarketItems } from '../data/actions';
import { Item } from '../types';
import { ApiItems } from './apis/api-items.service';

@Injectable({
  providedIn: 'root',
})
export class MarketFacade {
  public items$: Observable<Item[]> = this.store.select((state) => state.items);
  constructor(private store: Store<{ items: Item[] }>) {
    this.store.dispatch(LoadMarketItems());
  }
}
