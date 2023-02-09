import { createReducer, on } from '@ngrx/store';
import { Item } from '../types';
import { loadMarketItemsSuccess } from './actions';

export interface RootState {
  items: Item[];
}

const initialState: RootState = {
  items: [],
};

export const rootReducer = createReducer(
  initialState,
  on(loadMarketItemsSuccess, (state, action) => ({
    items: action.items,
  }))
);
