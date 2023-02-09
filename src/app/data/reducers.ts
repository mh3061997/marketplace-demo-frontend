import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store/src';
import { Item } from '../types';
import { LoadMarketItemsSuccess } from './actions';

interface RootState {
  items: Item[];
}
export const initialState: RootState = {
  items: [],
};

const _marketReducer = createReducer(
  initialState,
  on(LoadMarketItemsSuccess, (state, action) => ({
    items: action.items,
  }))
);

export function marketReducer(state: any, action: Action) {
  return _marketReducer(state, action);
}
