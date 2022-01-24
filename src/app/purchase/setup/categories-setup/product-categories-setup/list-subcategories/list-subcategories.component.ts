import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-list-subcategories',
  templateUrl: './list-subcategories.component.html',
  styleUrls: ['./list-subcategories.component.scss']
})
export class ListSubcategoriesComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ListSubcategoriesComponent>) { }

  items=[
    {name:'Accident Repairs	'},
    {name:'Cls Systems'},
    {name:'Ground Engaging Tools	'},
    {name:'Overhauling	'},
    {name:'Preventive Maintenance	'},
    {name:'Refurbished	'},
    {name:'Running Maintenance	'},
  ]
  ngOnInit() {
  }
  close():void{
    this.dialogRef.close()
  }

}
