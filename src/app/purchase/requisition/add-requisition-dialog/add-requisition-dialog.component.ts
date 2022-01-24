import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-requisition-dialog',
  templateUrl: './add-requisition-dialog.component.html',
  styleUrls: ['./add-requisition-dialog.component.scss']
})
export class  AddRequisitionDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddRequisitionDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}
