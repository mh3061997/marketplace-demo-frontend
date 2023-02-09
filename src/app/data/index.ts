import { loadMarketItems, loadMarketItemsSuccess } from './actions';
import { RootEffects } from './effects';
import { rootReducer, RootState } from './reducers';
import { getItems, getItemsSelector } from './selectors';

export const fromRoot = {
  loadMarketItems,
  loadMarketItemsSuccess,
  rootReducer,
  RootEffects,
  getItemsSelector,
  getItems,
};
