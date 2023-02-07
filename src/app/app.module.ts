import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MarketPageComponent } from './components/market-page/market-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { ItemComponent } from './components/market/item/item.component';
import { LimitedQuantityPipePipe } from './pipes/limited-quantity-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MarketPageComponent,
    NavbarComponent,
    NotificationListComponent,
    ItemComponent,
    LimitedQuantityPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
