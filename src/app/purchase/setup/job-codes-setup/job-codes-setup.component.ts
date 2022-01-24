import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { JobCodesDialogSetupComponent } from './job-codes-dialog-setup/job-codes-dialog-setup.component';

@Component({
  selector: 'app-job-codes-setup',
  templateUrl: './job-codes-setup.component.html',
  styleUrls: ['./job-codes-setup.component.scss']
})
export class JobCodesSetupComponent implements OnInit {

  items = [
    {code: '1DC', title: '1st Draft Corrections', category: 'Civi', rate: '500', status: true},
    {code: '1DR', title: '1st Draft Reviewer', category: 'Civil', rate: '1000', status: true},
    {code: 'ECAD2', title: 'Engineering CAD 2', category: 'Mechanical', rate: '1500', status: true},
    {code: 'EPC1', title: 'Engineering Party Chief 1', category: 'Electrical', rate: '1000', status: true},
    {code: 'EPC2', title: 'Engineering Party Chief 2', category: 'Mechanical', rate: '500', status: true},
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
    let dialogRef = this.dialog.open(JobCodesDialogSetupComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}


}
