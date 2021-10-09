import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewDialog } from './view-dialog/view-dialog.component';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'

import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-agri-input-purchase-request',
  templateUrl: './agri-input-purchase-request.component.html',
  styleUrls: ['./agri-input-purchase-request.component.scss']
})
export class AgriInputPurchaseRequestComponent implements OnInit {
  todayDate = new Date();
  currentIndex: any;
  orderList = [{
    id:1,
    orderName: 'AGBUY09102021_1042',
    buyerName: 'Alex Lee',
    orderDate: this.todayDate,
    fileName: 'RFQList_09102021_1042',
    orderDetails:[{
      category:'Seeds/Seedling',img:'{{Image source link}}',desc : 'Chill sakata 651(1500 seeds)',qty: 26
    },{
      category:'Nutrients/Fertilizer',img:'{{Image source link}}',desc : 'Acme Brand fert A/B - 50kg',qty: 114  
    },{
      category:'Pesticide/Fungicide',img:'{{Image source link}}',desc : 'Valiants ME(Methyk Eugenol) 30ml',qty: 40   
    },{
      category:'Growing Medium',img:'{{Image source link}}',desc : 'Acme Brand Cocopeat - 30kg',qty: 50  
    },{
      category:'Growing Medium',img:'{{Image source link}}',desc : 'Acme Brand Cocohusk - 50kg',qty: 24  
    },{
      category:'Pesticide/Fungicide',img:'{{Image source link}}',desc : 'Decis (Delthametrin) 1L',qty: 47  
    }]
  },{
    id:2,
    orderName: 'AGBUY09102021_1112',
    buyerName: 'Alex Lee',
    orderDate: this.todayDate,
    fileName: 'RFQList_09102021_1112',
    orderDetails:[{
      category:'Nutrients/Fertilizer',img:'{{Image source link}}',desc : 'Acme Brand fert A/B - 50kg',qty: 114  
    },{
      category:'Pesticide/Fungicide',img:'{{Image source link}}',desc : 'Valiants ME(Methyk Eugenol) 30ml',qty: 40   
    },{
      category:'Growing Medium',img:'{{Image source link}}',desc : 'Acme Brand Cocopeat - 30kg',qty: 50  
    },{
      category:'Growing Medium',img:'{{Image source link}}',desc : 'Acme Brand Cocohusk - 50kg',qty: 24  
    },{
      category:'Pesticide/Fungicide',img:'{{Image source link}}',desc : 'Decis (Delthametrin) 1L',qty: 47  
    },{
      category:'Seeds/Seedling',img:'{{Image source link}}',desc : 'Chill sakata 651(1500 seeds)',qty: 26  
    }]
  }]
  
  @ViewChild('viewDialog')
  viewDialog: ViewDialog;
   
  constructor() { }

  ngOnInit() {
  }
  showDetails(index){
    if (this.currentIndex == undefined || this.currentIndex != index){
      this.currentIndex = index;
    }
    else{
      this.currentIndex = undefined;
    }
  }

  viewDetails(det){
    this.viewDialog.openDialog(det)
  }

  downloadDetails(order){

   const csvConfig = { 
      filename: order.fileName,
      showLabels: true, 
      headers: ["Agri-Input Category", "Product Image", "Product Description", "Order Quantity"]
    };

    const csvExporter = new ExportToCsv(csvConfig);
 
    csvExporter.generateCsv(order.orderDetails);
  }
}
