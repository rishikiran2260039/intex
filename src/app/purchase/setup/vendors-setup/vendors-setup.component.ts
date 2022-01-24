import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { AddVendorDialogSetupComponent } from './add-vendor-dialog-setup/add-vendor-dialog-setup.component';
import { PurchaseOrderDetailsPopupComponent } from './purchase-order-details-popup/purchase-order-details-popup.component';
import { WorkOrderDetailsPopupComponent } from './work-order-details-popup/work-order-details-popup.component';

@Component({
  selector: 'app-vendors-setup',
  templateUrl: './vendors-setup.component.html',
  styleUrls: ['./vendors-setup.component.scss']
})
export class VendorsSetupComponent implements OnInit {

  variable:string = 'blue'

  constructor(public dialog: MatDialog,private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle("Om Sai Intex | Admin |  Vendors");

  }

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

  values = [
    {contractor:"GV Contractors",contact:"Kumar",email:"Kumar@gvc.com",phone:"9935385470",address:"Sector 42",city:"Gurgram",state:"Haryana",country:"India",postalcode:"507032",purchase:"#435164034012",date:"15-12-2019",status:"Active",purchaseorder:"1",workorder:"1"},
    {contractor:"HBVC Systems",contact:"Salim",email:"salim@hbvc.com",phone:"7992949180",address:"Vijay Nagar",city:"Bangalore",state:"Karnataka",country:"India",postalcode:"507032",purchase:"#638765478234",date:"19-11-2019",status:"Inactive",purchaseorder:"2",workorder:"2"},
    {contractor:"ABC Contractors",contact:"Zeeshan",email:"Zeeshan@abc.com",phone:"8880802206",address:"Bandra",city:"Mumbai",state:"Maharastra",country:"India",postalcode:"507032",purchase:"#435164034012",date:"04-11-2019",status:"Active",purchaseorder:"3",workorder:"3"},
    {contractor:"HBVC Systems",contact:"Raghava",email:"raghava@hbvc.com",phone:"898889180",address:"Vijay Nagar",city:"Bangalore",state:"Karnataka",country:"India",postalcode:"507032",purchase:"#638765478234",date:"19-11-2019",status:"Inactive",purchaseorder:"4",workorder:"4"},
    {contractor:"ABC Contractors",contact:"Kabeer",email:"kabeer@abc.com",phone:"7738383206",address:"Bandra",city:"Mumbai",state:"Maharastra",country:"India",postalcode:"507032",purchase:"#435164034012",date:"04-11-2019",status:"Active",purchaseorder:"5",workorder:"5"}
  ]

colorFe(){
  return this.variable;
}
  openAddContractorDialog(){
    this.dialog.open(AddVendorDialogSetupComponent,{
      width:"600px",
      height:"auto"
    })
  }

  // openContractsDialog(){
  //   this.dialog.open(OpenVendorDialogueComponent,{
  //     width:"500px",
  //     height:"auto"
  //   })
  // }

  public openAddCategory2(items){
    let dialogRef = this.dialog.open(AddVendorDialogSetupComponent, {
      data:items,
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
  }

  public purchaseorder(){
    let dialogRef = this.dialog.open(PurchaseOrderDetailsPopupComponent, {
     
      height: 'auto',
      width: '1100px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
  }

  public workorder(){
    let dialogRef = this.dialog.open(WorkOrderDetailsPopupComponent, {
      
      height: 'auto',
      width: '900px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
  }

}
