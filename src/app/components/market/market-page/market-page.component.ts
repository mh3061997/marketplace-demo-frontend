import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { MarketFacade } from 'src/app/services/market-facade.service';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.css'],
})
export class MarketPageComponent {
  isUserSeller: boolean;
  items: any[] = [];
  constructor(
    private auth: AuthServiceService,
    private marketFacade: MarketFacade
  ) {
    this.isUserSeller = auth.isUserSeller();
    this.marketFacade
      .getMarketItems()
      .subscribe((items) => (this.items = items));
  }
}
