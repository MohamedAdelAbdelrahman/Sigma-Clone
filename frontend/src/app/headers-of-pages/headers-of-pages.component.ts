import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-headers-of-pages',
  templateUrl: './headers-of-pages.component.html',
  styleUrls: ['./headers-of-pages.component.css']
})
export class HeadersOfPagesComponent {

  navbarfixed:boolean = false ;
  @HostListener('window:scroll',['$event']) onscroll() {
    if(window.scrollY > 100){
      this.navbarfixed = true ;
    }else{
      this.navbarfixed = false ;

    }
  }
  
  }





