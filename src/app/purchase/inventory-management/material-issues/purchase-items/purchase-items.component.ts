import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { ItemPopupComponent } from '../item-popup/item-popup.component';




@Component({
  selector: 'app-purchase-items',
  templateUrl: './purchase-items.component.html',
  styleUrls: ['./purchase-items.component.scss']
})
export class PurchaseItemsComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }
  items = [
    {item_code:"FMX480",item_name: "Volvo",item_category: "Dump Truck",Qty:10,Qtyissued:8,remarks:"NEED 200 ITEMS AT DIFFERENT PROJECT"},
    {item_code:"D85WSS17",item_name: "Caterpillar",item_category: "Backhoe Loader",Qty:10,Qtyissued:10,remarks:"IMMEDIATE REQUIREMENT OF 500 SPARE PARTS" },
    {item_code:"ACTROSS 4841K",item_name: "Mercedes",item_category: "Backhoe Loader",Qty:10,Qtyissued:9,remarks:"MAP SPARE PARTS WITH MATERIALS" },
    {item_code:"D85ESS 86",item_name: "Tata",item_category: "Dump Truck",Qty:10,Qtyissued:7,remarks:"NEED 100 ITEMS IMMEDIATELY" },
    {item_code:"All Models",item_name: "Volvo",item_category: "Backhoe Loader",Qty:10, Qtyissued:10,remarks:"NEEDED 10 ITEMS AT THE PROJECT LOCATION"},
   
     ]


     additem() {
     this.dialog.open(ItemPopupComponent,{
     height:'auto',
     width:'800px'
  
      })
    }

}
