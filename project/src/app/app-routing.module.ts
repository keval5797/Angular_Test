import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgriPurchaseManagementComponent } from './agri-purchase-management/agri-purchase-management.component';
import { SupplierMasterComponent } from './supplier-master/supplier-master.component';
import { AgriInputMasterComponent } from './agri-input-master/agri-input-master.component';
import { AgriInputPurchaseRequestComponent } from './agri-input-purchase-request/agri-input-purchase-request.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TaxMasterComponent } from './tax-master/tax-master.component';

const routes: Routes = [{
    path:'',
    component: NavBarComponent,
    children: [
      {
        path: '',
        component: AgriPurchaseManagementComponent
      },
      {
        path: 'agri-purchase-management',
        component: AgriPurchaseManagementComponent
      },
      {
        path: 'agri-input-master',
        component: AgriInputMasterComponent
      },
      {
        path: 'supplier-master',
        component: SupplierMasterComponent
      },
      {
        path: 'agri-input-purchase-request',
        component: AgriInputPurchaseRequestComponent
      },
      {
        path:'tax-master',
        component: TaxMasterComponent
      }
    ]
  }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
