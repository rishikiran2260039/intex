import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-stock-transfer-request-dialog',
  templateUrl: './create-stock-transfer-request-dialog.component.html',
  styleUrls: ['./create-stock-transfer-request-dialog.component.scss']
})
export class CreateStockTransferRequestDialogComponent implements OnInit {

  constructor(public dialog : MatDialogRef<CreateStockTransferRequestDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}