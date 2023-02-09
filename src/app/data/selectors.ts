import { createSelector } from '@ngrx/store';
import { Item } from '../types';
import { RootState } from './reducers';

const getItems = (state: RootState): Item[] => state.items;

const getItemsSelector = createSelector(
  (state: { rootState: RootState }) => state.rootState,
  getItems
);

export { getItemsSelector, getItems };
