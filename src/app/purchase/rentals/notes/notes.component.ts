import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})

export class NotesComponent implements OnInit {

  constructor(public dialog : MatDialogRef<NotesComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}

