import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadersOfPagesComponent } from './components/headers-of-pages/headers-of-pages.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './components/category/category.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"category",component:CategoryComponent},
  {path:"cart",component:CartComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"account",component:AccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
