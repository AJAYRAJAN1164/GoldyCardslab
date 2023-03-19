import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
import * as AOS from 'aos';
import { HttpClient } from '@angular/common/http';
import {
  AUTO_STYLE,
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Router } from '@angular/router';
const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(2000, style({opacity: 1}))
      ]) 
    ]),
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private httpClient: HttpClient) { }
    array:any = [];
    count:any = {};
    readMore:Boolean = false;
    panelOpenState = false;
    collapse1:boolean =false;
    collapse2:boolean =false;
    collapse3:boolean =false;
    collapse4:boolean =false;
    collapse5:boolean =false;
    products:any;

    
  ngOnInit(): void {
    AOS.init();
    this.array =['a','a','b','c','d','d','d','z','s'];
    this.triggerFunction();
    this.getProductDetails();
  }
  getProductDetails(){
    this.httpClient
    .get('/assets/jsonData/productsDetails.json')
    .subscribe((formFields: any) => {

       this.products= formFields.product_details
       console.log( this.products);
    });
}
   triggerFunction(){
    this.array.forEach((element:any) => {
      this.count[element] = (this.count[element] || 0) + 1;
    });
   console.log(this.count);
  }
  goToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
  }

  redirect(index:number){
    this.router.navigateByUrl('/product_details/'+index)
  }

}
