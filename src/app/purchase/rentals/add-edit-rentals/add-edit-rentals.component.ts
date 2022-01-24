import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-edit-rentals',
  templateUrl: './add-edit-rentals.component.html',
  styleUrls: ['./add-edit-rentals.component.scss']
})
export class AddEditRentalsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEditRentalsComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
