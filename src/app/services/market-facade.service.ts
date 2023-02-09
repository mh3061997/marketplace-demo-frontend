import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarketFacade {
  constructor(private http: HttpClient) {}

  getMarketItems() {
    return this.http.get<any[]>(environment.apiEndPoint + 'item');
  }
}
