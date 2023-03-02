import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { HeadersOfPagesComponent } from './headers-of-pages/headers-of-pages.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, CartComponent, AccountComponent, HeadersOfPagesComponent, HomeComponent, FooterComponent, CategoryComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
