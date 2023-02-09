import { createAction, props } from '@ngrx/store';
import { Item } from '../types';

export const LoadMarketItems = createAction('[Item Component] loadMarketItems');
export const LoadMarketItemsSuccess = createAction(
  '[Item Component] loadMarketItems Success',
  props<{ items: Item[] }>()
);
export const ChangeItemQuantity = createAction(
  '[Item Component] changeItemQuantity',
  props<{ itemId: number; quantity: number }>()
);
