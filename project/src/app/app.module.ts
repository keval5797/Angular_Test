import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AgriPurchaseManagementComponent } from './agri-purchase-management/agri-purchase-management.component';
import { AgriInputMasterComponent } from './agri-input-master/agri-input-master.component';
import { SupplierMasterComponent } from './supplier-master/supplier-master.component';
import { AgriInputPurchaseRequestComponent } from './agri-input-purchase-request/agri-input-purchase-request.component';
import { TaxMasterComponent } from './tax-master/tax-master.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewDialogComponent,ViewDialog } from './agri-input-purchase-request/view-dialog/view-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AgriPurchaseManagementComponent,
    AgriInputMasterComponent,
    SupplierMasterComponent,
    AgriInputPurchaseRequestComponent,
    TaxMasterComponent,
    NavBarComponent,
    ViewDialogComponent,
    ViewDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents:[
    ViewDialogComponent,
    ViewDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
