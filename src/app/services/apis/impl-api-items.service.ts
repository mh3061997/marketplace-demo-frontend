import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/types';
import { environment } from 'src/environments/environment';
import { ApiItems } from './api-items.service';

@Injectable({
  providedIn: 'root',
})
export class ImplApiItemsService extends ApiItems {
  getMarketItems(): Observable<Item[]> {
    return this.http.get<Item[]>(environment.apiEndPoint + 'item');
  }
  changeItemQuantity(itemId: number, quantity: number): void {
    this.http
      .post(environment.apiEndPoint + 'item/' + itemId, null, {
        params: {
          quantity,
        },
      })
      .subscribe();
  }

  constructor(private http: HttpClient) {
    super();
  }
}
