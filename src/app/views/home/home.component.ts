import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
import * as AOS from 'aos';


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
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }
    array:any = [];
    count:any = {};
    
  ngOnInit(): void {
    AOS.init();
    this.array =['a','a','b','c','d','d','d','z','s'];
    this.triggerFunction();
  }
 
   triggerFunction(){
    this.array.forEach((element:any) => {
      this.count[element] = (this.count[element] || 0) + 1;
    });
   console.log(this.count);
  }


}
