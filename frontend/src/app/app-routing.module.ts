import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadersOfPagesComponent } from './headers-of-pages/headers-of-pages.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"home",component:HeadersOfPagesComponent},
  {path:"",component:HeadersOfPagesComponent},
  {path:"login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
