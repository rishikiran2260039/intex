import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddItemInvoiceConsignmentComponent } from './add-item-invoice-consignment/add-item-invoice-consignment.component';

@Component({
  selector: 'app-invoicing-active-consignment',
  templateUrl: './invoicing-active-consignment.component.html',
  styleUrls: ['./invoicing-active-consignment.component.scss']
})
export class InvoicingActiveConsignmentComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  items=[
    {partnumber:"B229900003680",invoiced:"16,240",refrence:"OM/BHL/OCT/19-20/1077"},
    {partnumber:"B229900003681",invoiced:"17,440",refrence:"	OM/BHL/OCT/19-20/1078"},
    {partnumber:"B229900003682",refrence:"OM/BHL/OCT/19-20/1079",invoiced:"15,520"},
    {partnumber:"B229900003683",refrence:"OM/BHL/OCT/19-20/1081",invoiced:"18,860"},
    {partnumber:"B229900003684",refrence:"OM/BHL/OCT/19-20/1082",invoiced:"20,550"},

  ]

  public addnewitem() {
    let dialogRef = this.dialog.open(AddItemInvoiceConsignmentComponent, {
      
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

   
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }

}