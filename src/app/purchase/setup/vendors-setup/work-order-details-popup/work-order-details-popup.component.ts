import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-work-order-details-popup',
  templateUrl: './work-order-details-popup.component.html',
  styleUrls: ['./work-order-details-popup.component.scss']
})
export class WorkOrderDetailsPopupComponent implements OnInit {

  constructor(public dialog: MatDialog , public dialog1:MatDialogRef<WorkOrderDetailsPopupComponent>) { }
  filterToggle = false;

  ngOnInit() {
  }
   
  items = [
    {Vendor:"Menon Bearings Ltd ",Delivery:"12/09/2021",Value:"25,788.00",WorkOrder: "WO-019"},
    {Vendor:"Mallikarjuna Rao",Delivery:"18/09/2021",Value:"33,000.00",WorkOrder: "WO-020"},
    {Vendor:"Arnold D Cruz",Delivery:"21/10/2021",Value:"29,788.00",WorkOrder: "WO-021"},
    {Vendor:"Axel adler	",Delivery:"23/12/2021",Value:"32,788.00",WorkOrder: "WO-022"},
   
  ];

  // public addworkorder(item) {
  //   let dialogRef = this.dialog.open(AddworkordersDialogComponent, {
  //     data:item,
  //     height: 'auto',
  //     width: '700px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }

  // public workinfo() {
  //   let dialogRef = this.dialog.open(WorkinfoDialogComponent, {
      
  //     height: 'auto',
  //     width: '700px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }
 
  close(){
    this.dialog1.close();
  }
  

}
