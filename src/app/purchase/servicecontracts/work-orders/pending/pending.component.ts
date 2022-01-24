import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PendingItemPopUpComponent } from './pending-item-pop-up/pending-item-pop-up.component';
import { PendingRequistionPopUpComponent } from './pending-requistion-pop-up/pending-requistion-pop-up.component';
import { TermsPendingPopUpComponent } from './terms-pending-pop-up/terms-pending-pop-up.component';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  filterToggle=false;
  items = [
    {Amount:"95000", poref: "OM/BHL/OCT/19-20/1077", Name:"GV Contractor"   , podate: "07-Oct-2020", deliverydate: "19-Nov-2021", requisition: "5", items: "6",update:"12"},
    {Amount:"113000", poref: "OM/BHL/OCT/19-20/1078", Name:"HBVC Systems"    , podate: "09-Oct-2021", deliverydate: "15-Dec-2021", requisition: "4", items: "8",update:"23"},
    {Amount:"78000", poref: "OM/BHL/OCT/19-20/1079", Name:"ABC Contractors" ,podate: "10-July-2021", deliverydate: "07-Aug-2021", requisition: "5", items: "8",update:"16"},
    {Amount:"29000", poref: "OM/BHL/OCT/19-20/1080", Name:"HBVC Systems"    ,podate: "12-Oct-2021", deliverydate: "19-Nov-2021", requisition: "4", items: "5",update:"19"},
    {Amount:"81000", poref: "OM/BHL/OCT/19-20/1081", Name:"ABC Contractors" ,podate: "14-Nov-2021", deliverydate: "15-Dec-2021", requisition: "3", items: "6",update:"29"},
    
  ];
  TermsPopUp(){
    // this.dialog.open(TermsPendingPopUpComponent, {
    //   height: 'auto', 
    //   width: '700px'
    // })

  }
  RequistionPop(){
    this.dialog.open(PendingRequistionPopUpComponent, {
      height: 'auto', 
      width: '700px'
    })

  }    
 
  ItemPop(){
    this.dialog.open(PendingItemPopUpComponent, {
      height: 'auto', 
      width: '1000px'
    })

  }    
 


}















