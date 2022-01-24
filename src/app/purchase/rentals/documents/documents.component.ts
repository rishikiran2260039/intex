import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = [
    {type:"Heavy Equipments", category: "Other", docType:"Insurence Document", description:"-", addedDate:"11-Nov-2021"},
    {type:"Hand and Power tools", category: "Other", docType:"Maintenance Report", description:"-", addedDate:"23-Jul-2021",},
    {type:"Consumables and Building Materials", category: "Other", docType:"Rental Contract", description:"-", addedDate:"31-Sep-2021",}
  ]

}
