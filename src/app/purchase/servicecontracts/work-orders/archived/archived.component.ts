import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ArchivedItemPopUpComponent } from './archived-item-pop-up/archived-item-pop-up.component';
import { ArchivedRequistionPopUpComponent } from './archived-requistion-pop-up/archived-requistion-pop-up.component';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.scss']
})
export class ArchivedComponent implements OnInit {

  constructor(public dialog:MatDialog) { } 
  
  ngOnInit() { } filterToggle=false; 
  items = [ {Amount:"95000", poref: "OM/BHL/OCT/19-20/1077",  Name:"GV Contractor"   , podate: "07-Oct-2020", deliverydate: "19-Nov-2021", requisition: "5", items: "9",update:"Update",deliverytype:"Regular",approvedby:"Perry Barnevik",status:"Archived"}, {Amount:"130000", poref: "OM/BHL/OCT/19-20/1078", Name:"ABC Contractor"   , podate: "09-Oct-2021", deliverydate: "15-Dec-2021", requisition: "4", items: "6",update:"Update",deliverytype:"Staggered",approvedby:"Abraham Forssell",status:"Archived"}, {Amount:"75000", poref: "OM/BHL/OCT/19-20/1079", Name:"PVST Contractor"   , podate: "10-July-2021", deliverydate: "07-Aug-2021", requisition: "5", items: "8",update:"Update",deliverytype:"Regular",approvedby:"Adolf Fredrik",status:"Archived"}, {Amount:"43000", poref: "OM/BHL/OCT/19-20/1080", Name:"HSDS Contractor"   ,podate: "12-Oct-2021", deliverydate: "19-Nov-2021", requisition: "3", items: "9",update:"Update",deliverytype:"Staggered",approvedby:"Ole Andress Halvorsen",status:"Archived"}, {Amount:"12000", poref: "OM/BHL/OCT/19-20/1081", Name:"ABC Contractor"   , podate: "14-Nov-2021", deliverydate: "15-Dec-2021", requisition: "5", items: "7",update:"Update",deliverytype:"Regular",approvedby:"Adolf Fredrik",status:"Archived"}, ];
  
  ArchivedRequistionPopUp(){
    this.dialog.open(ArchivedRequistionPopUpComponent, {
      height: 'auto',
      width: '1100px'
    })
  } 
   
  ArchivedItemPopUp(){
    this.dialog.open(ArchivedItemPopUpComponent, {
      height: 'auto', 
      width: '1100px'
    })
  }
}
