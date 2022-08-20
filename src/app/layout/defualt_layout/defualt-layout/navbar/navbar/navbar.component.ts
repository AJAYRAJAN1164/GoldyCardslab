import { Component, OnInit } from '@angular/core';
import { navItems } from '../../sideNav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuItems: any;

  constructor() {}

  ngOnInit(): void {
    this.menuItems = navItems;
  }
}
