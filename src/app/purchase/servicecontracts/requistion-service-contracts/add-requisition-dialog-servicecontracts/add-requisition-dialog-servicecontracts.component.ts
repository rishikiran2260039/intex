import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-requisition-dialog-servicecontracts',
  templateUrl: './add-requisition-dialog-servicecontracts.component.html',
  styleUrls: ['./add-requisition-dialog-servicecontracts.component.scss']
})
export class AddRequisitionDialogServicecontractsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddRequisitionDialogServicecontractsComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}