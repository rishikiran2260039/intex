import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-new-item-dialog',
  templateUrl: './add-new-item-dialog.component.html',
  styleUrls: ['./add-new-item-dialog.component.scss']
})
export class AddNewItemDialogComponent implements OnInit {

  constructor(public dialog : MatDialogRef<AddNewItemDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}