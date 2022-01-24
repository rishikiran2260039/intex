import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-infopopup',
  templateUrl: './add-infopopup.component.html',
  styleUrls: ['./add-infopopup.component.scss']
})
export class AddInfopopupComponent implements OnInit {

  constructor(public dialog : MatDialogRef<AddInfopopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
