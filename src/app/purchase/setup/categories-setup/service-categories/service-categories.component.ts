import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddServiceCatDialogComponent } from './add-service-cat-dialog/add-service-cat-dialog.component';

@Component({
  selector: 'app-service-categories',
  templateUrl: './service-categories.component.html',
  styleUrls: ['./service-categories.component.scss']
})
export class ServiceCategoriesComponent implements OnInit {

  
  items = [
    {name: 'Electrical', code: 'ELEC', branch: '18',status: true,subcategory:"3"},
    {name: 'Plumbing', code: 'PLUMB', branch: '8',status: true,subcategory:"4"},
    {name: 'Mechanical', code: 'MECH', branch: '0',status: true,subcategory:"3"},
    {name: 'Civil', code: 'CIVIL', branch: '0',status: true,subcategory:"5"},
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
    let dialogRef = this.dialog.open(AddServiceCatDialogComponent , {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

  // openBranchDialog(value) {
  //   let dialogRef = this.dialog.open(BranchDialogComponent, {
  //     data: value,
  //     height: 'auto',
  //     width: '600px',
  // });
  // }
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}


}
