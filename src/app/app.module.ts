import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MarketPageComponent } from './components/market/market-page/market-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { ItemComponent } from './components/market/item/item.component';
import { LimitedQuantityPipePipe } from './pipes/limited-quantity-pipe.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtAuthInterceptorService } from './interceptors/jwt-auth-interceptor.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MarketPageComponent,
    NavbarComponent,
    NotificationListComponent,
    ItemComponent,
    LimitedQuantityPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtAuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
