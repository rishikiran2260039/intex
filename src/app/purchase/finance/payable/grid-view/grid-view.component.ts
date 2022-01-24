import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddVendorsComponent } from './add-vendors/add-vendors.component';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  constructor(    public dialog: MatDialog,) { }

  ngOnInit() {
  }

  tableList = [
    { name: 'Raheja', type: 'Supplier', sub: '10-04-2021', due:'15-07-2021', bill:'1500000', inv:'2001321', ref: '#OD4327-2854-9646', paym: 'Add', paid: '0', bal: '1500000',rem:'Amount Not Paid' },
    { name: 'Manjeera', type: 'Contractor', sub: '07-04-2021', due:'23-07-2021', bill:'4500000', inv:'2031421', ref: '#OD4327-2854-9546', paym: '2', paid: '1250000', bal: '3500000',rem:'Amount Debited' },
    { name: 'Reva group', type: 'Supplier', sub: '10-05-2021', due:'12-09-2021', bill:'500000', inv:'2057821', ref: '#OD4327-2854-3985', paym: '7', paid: '1500000', bal: '3500000',rem:'Account transfer may take maximum  2 days' },
    { name: 'Asian', type: 'Builder', sub: '06-03-2021', due:'15-10-2021', bill:'1000000', inv:'20012467', ref: '#OD4327-2854-0589', paym: '15', paid: '400000', bal: '600000',rem:'Amount Debited' },
  ]
public addpayables(user){
  let dialogRef = this.dialog.open(AddVendorsComponent, {
    data:user,
    height: 'auto',
    width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

}
