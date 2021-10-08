import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild('sidenav')
  sideNav: MatSidenav;
  constructor() { }

  ngOnInit() {
  }
  open() {
    this.sideNav.open();
  }
}
