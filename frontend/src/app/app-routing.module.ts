import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadersOfPagesComponent } from './headers-of-pages/headers-of-pages.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"category",component:CategoryComponent},
  {path:"cart",component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
