import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-changesmadepop-published',
  templateUrl: './changesmadepop-published.component.html',
  styleUrls: ['./changesmadepop-published.component.scss']
})
export class ChangesmadepopPublishedComponent implements OnInit {

  constructor(public dialog:MatDialogRef< ChangesmadepopPublishedComponent >) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

 


  items = [
    {Number :"BGR/OM/BHL/OCT/19-20/1073",Justification:"-",ModifiedBy:"Super Admin",ModifiedDate:"16-Oct-2019, 04:44 PM",},
    {Number :"BGR/OM/BHL/OCT/19-20/1073",Justification:"-",ModifiedBy:"Super Admin",ModifiedDate:"02-Dec-2019, 04:43 PM",},

  ]

}
