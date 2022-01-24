import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddProdSetupComponent } from './add-prod-setup/add-prod-setup.component';
import { ListSubcategoriesComponent } from './list-subcategories/list-subcategories.component';

@Component({
  selector: 'app-product-categories-setup',
  templateUrl: './product-categories-setup.component.html',
  styleUrls: ['./product-categories-setup.component.scss']
})
export class ProductCategoriesSetupComponent implements OnInit {

  items = [
    {sub:'2',name: 'Backhole Loader', code: 'BHL', branch: '18',status: true},
    {sub:'3',name: 'Bulldozer', code: 'DZR', branch: '8',status: true},
    {sub:'1',name: 'Bus', code: 'BUS', branch: '0',status: true},
    {sub:'4',name: 'car', code: 'CAR', branch: '0',status: true},
    {sub:'2',name: 'Dump truck', code: 'DPT', branch: '7',status: true},
    {sub:'5',name: 'Excavator', code: 'EXV', branch: '4',status: true},
    {sub:'1	',name: 'Miller', code: 'MIL', branch: '0', status: true},
    {sub:'3',name: 'Mobile Crane', code: 'CRN', branch: '0',status: true},
    {sub:'7',name: 'Motor Grader', code: 'GDR', branch: '4',status: true},
    {sub:'9',name: 'Primary Track Unit', code: 'TRACKUNIT', branch: '0',status: true}
  ]

  constructor(public dialog: MatDialog, private alertService: AlertService) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddProdSetupComponent , {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

  openBranchDialog(value) {
    let dialogRef = this.dialog.open(ListSubcategoriesComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}

}
