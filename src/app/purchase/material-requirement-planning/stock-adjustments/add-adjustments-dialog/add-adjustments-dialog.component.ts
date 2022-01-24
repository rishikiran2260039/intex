import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-adjustments-dialog',
  templateUrl: './add-adjustments-dialog.component.html',
  styleUrls: ['./add-adjustments-dialog.component.scss']
})
export class AddAdjustmentsDialogComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddAdjustmentsDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
  
}