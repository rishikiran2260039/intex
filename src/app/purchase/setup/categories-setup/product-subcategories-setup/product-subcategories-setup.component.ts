import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddSubSetupComponent } from './add-sub-setup/add-sub-setup.component';

@Component({
  selector: 'app-product-subcategories-setup',
  templateUrl: './product-subcategories-setup.component.html',
  styleUrls: ['./product-subcategories-setup.component.scss']
})
export class ProductSubcategoriesSetupComponent implements OnInit {

  items = [
    {name: 'Accident Repairs', code: 'ACR', status: true},
    {name: 'Breakdown Repairs (emergency)', code: 'BDR', status: true},
    {name: 'Cls Systems', code: 'CLS', status: true},
    {name: 'Ground Engaging Tools', code: 'GET', status: true},
    {name: 'Overhauling', code: 'OVH', status: true},
    {name: 'Preventive Maintenance', code: 'PVM', status: true},
    {name: 'Refurbished', code: 'RFD', status: true},
    {name: 'Running Maintenance', code: 'RNM', status: true},
    {name: 'Scheduled Maintenance', code: 'SHM', status: true},
    {name: 'Undercarriage', code: 'UCG', status: true},
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
    let dialogRef = this.dialog.open(AddSubSetupComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}
}
