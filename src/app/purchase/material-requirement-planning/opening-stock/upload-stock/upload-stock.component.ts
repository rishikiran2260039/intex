import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-upload-stock',
  templateUrl: './upload-stock.component.html',
  styleUrls: ['./upload-stock.component.scss']
})
export class UploadStockComponent implements OnInit {

  constructor(public dialog: MatDialogRef<UploadStockComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close()
  }

}
