import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SafetyStockComponent } from './safety-stock/safety-stock.component';

@Component({
  selector: 'app-reorder-levels',
  templateUrl: './reorder-levels.component.html',
  styleUrls: ['./reorder-levels.component.scss']
})
export class ReorderLevelsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  items = [
    {part:"TS5EE6107", partName:"CATX480",stockingDate:"12-NOV-2020", updatedDate:"12-MAY-2021", available:4890, leadTime:90 , safetyStock:4020, dailyUsage:300,buffer:2100, reorder:6000, reorderDate:"12-JUL-2021",moq:"1000",reorderinterval:"60"},
    {part:"TS18EE204", partName:"CATD347",stockingDate:"12-JAN-2020", updatedDate:"12-APR-2021", available:4000, leadTime:65 , safetyStock:3800, dailyUsage:280,buffer:1800, reorder:4000, reorderDate:"18-AUG-2021",moq:"1500",reorderinterval:"80"},
    {part:"TS1234A28", partName:"CATB214",stockingDate:"12-FEB-2020", updatedDate:"12-NOV-2021", available:4020, leadTime:45 , safetyStock:3700, dailyUsage:170,buffer:740, reorder:3000, reorderDate:"23-MAY-2021",moq:"2000",reorderinterval:"100"},
    {part:"TS281G885", partName:"CATX381",stockingDate:"12-DEC-2020", updatedDate:"12-JAN-2021", available:3900, leadTime:55 , safetyStock:3400, dailyUsage:210,buffer:1200, reorder:2500, reorderDate:"31-AUG-2021",moq:"1000",reorderinterval:"60"},


  ];

  safetyStockDialog(item){
    this.dialog.open(SafetyStockComponent, {
      data: item,
      height:'auto',
      width: '900px'
    })
  }

}
