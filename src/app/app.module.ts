import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MarketPageComponent } from './components/market/market-page/market-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { ItemComponent } from './components/market/item/item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtAuthInterceptorService } from './interceptors/jwt-auth-interceptor.service';
import { FormsModule } from '@angular/forms';
import { ApiItems } from './services/apis/api-items.service';
import { ImplApiItemsService } from './services/apis/impl-api-items.service';
import { DataModule } from './data/data.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MarketPageComponent,
    NavbarComponent,
    NotificationListComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    DataModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtAuthInterceptorService,
      multi: true,
    },
    {
      provide: ApiItems,
      useClass: ImplApiItemsService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
