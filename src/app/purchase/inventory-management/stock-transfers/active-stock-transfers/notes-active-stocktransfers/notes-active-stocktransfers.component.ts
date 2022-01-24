import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-notes-active-stocktransfers',
  templateUrl: './notes-active-stocktransfers.component.html',
  styleUrls: ['./notes-active-stocktransfers.component.scss']
})
export class NotesActiveStocktransfersComponent implements OnInit {

  constructor(public dialog : MatDialogRef<NotesActiveStocktransfersComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}