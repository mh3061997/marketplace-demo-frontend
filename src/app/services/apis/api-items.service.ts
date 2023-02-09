import { Observable } from 'rxjs';
import { Item } from 'src/app/types';

export abstract class ApiItems {
  abstract getMarketItems(): Observable<Item[]>;
  abstract changeItemQuantity(itemId: number, quantity: number): void;
}
