import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild('sidenav')
  sideNav: MatSidenav;
  constructor(private router: Router,) { }

  ngOnInit() {
  }

  open() {
    this.sideNav.open();
  }

  goToAgriPurchaseManagement() {
    this.sideNav.close();
    this.router.navigate(['agri-purchase-management']);
  }

  goToAgriInputMaintenance(){
    this.sideNav.close();
    this.router.navigate(['agri-input-master']);
  }

  goToSupplierMasterMaintenance(){
    this.sideNav.close();
    this.router.navigate(['supplier-master']);
  }

  goToAgriInputPurchaseRequests(){
    this.sideNav.close();
    this.router.navigate(['agri-input-purchase-request']);
  }

  goToTaxMasterMaintenance(){
    this.sideNav.close();
    this.router.navigate(['tax-master']);
  }
}
