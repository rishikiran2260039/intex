import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-vendor-dialog-setup',
  templateUrl: './add-vendor-dialog-setup.component.html',
  styleUrls: ['./add-vendor-dialog-setup.component.scss']
})
export class AddVendorDialogSetupComponent implements OnInit {
  projectForm: FormGroup;
  
  constructor(public dialogRef: MatDialogRef<AddVendorDialogSetupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  close(){
    this.dialogRef.close();
  }

}
