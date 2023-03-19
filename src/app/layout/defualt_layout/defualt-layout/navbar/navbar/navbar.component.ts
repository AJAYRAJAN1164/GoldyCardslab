import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { navItems } from '../../sideNav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuItems: any;
  @ViewChild('bodyRef',{static: false}) bodyRef!: ElementRef;
  @ViewChild('mobileNavShow',{static: false}) mobileNavShow!: ElementRef;
  @ViewChild('mobileNavHide',{static: false}) mobileNavHide!: ElementRef;
  bodyElement = document.body;
  constructor(private router: Router,private el: ElementRef) {}

  ngOnInit(): void {
    this.menuItems = navItems;
  }
  navigate(portion:string){
    this.router.navigate(['/results'], { fragment: 'publishedResearchSection' });
  }
  private state = "normal"; // normal or collapsed
  
  showMobileNav(){
    //this.bodyRef.nativeElement.classList.toggle('mobile-nav-active');
    this.state = this.state === "normal" ? "collapsed": "normal";
   // this.el.nativeElement.closest('body').class = this.stateClassRef[this.state];
    // this.mobileNavShow.nativeElement.classList.toggle('d-none');
    // this.mobileNavHide.nativeElement.classList.toggle('d-none');
   
    this.bodyElement.classList.add('mobile-nav-active');
    this.mobileNavShow.nativeElement.classList.add('d-none');
    this.mobileNavHide.nativeElement.classList.remove('d-none');
  }

  closeMobileNav(){
    this.bodyElement.classList.remove('mobile-nav-active');
    this.mobileNavHide.nativeElement.classList.add('d-none');
    this.mobileNavShow.nativeElement.classList.remove('d-none');
  }

  goToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
  }
}
