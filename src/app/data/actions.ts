import { createAction, props } from '@ngrx/store';
import { Item } from '../types';

const LOAD_MARKET_ITEMS = '[Items] Load Market Items';
const LOAD_MARKET_ITEMS_SUCCESS = '[Items] Load Market Items Success';

// this will be dispatched from some component or service
export const loadMarketItems = createAction(LOAD_MARKET_ITEMS);

export const loadMarketItemsSuccess = createAction(
  LOAD_MARKET_ITEMS_SUCCESS,
  props<{ items: Item[] }>()
);
