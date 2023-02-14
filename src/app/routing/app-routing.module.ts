import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { MarketPageComponent } from '../components/market/market-page/market-page.component';
import { RegisterPageComponent } from '../components/register-page/register-page.component';
import { LoginGuard } from './login-guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'market',
    component: MarketPageComponent,
    canActivate: [LoginGuard],
  },
  {
    path: '**',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
