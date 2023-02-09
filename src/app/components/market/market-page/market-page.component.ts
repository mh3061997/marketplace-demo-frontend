import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { MarketFacade } from 'src/app/services/market-facade.service';
import { Item } from 'src/app/types';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.css'],
})
export class MarketPageComponent {
  isUserSeller: boolean;
  items$: Observable<Item[]>;
  constructor(
    private auth: AuthServiceService,
    private marketFacade: MarketFacade
  ) {
    this.isUserSeller = this.auth.isUserSeller();
    this.items$ = this.marketFacade.items$;
  }
}
