import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApprovalByStageDialogComponent } from '../published-po/approval-by-stage-dialog/approval-by-stage-dialog.component';
import { ChangesmadepopPublishedComponent } from '../published-po/changesmadepop-published/changesmadepop-published.component';
import { ItemsArchivedPopupComponent } from './items-archived-popup/items-archived-popup.component';
import { ReqisitionArchivedPopupComponent } from './reqisition-archived-popup/reqisition-archived-popup.component';

@Component({
  selector: 'app-archived-po',
  templateUrl: './archived-po.component.html',
  styleUrls: ['./archived-po.component.scss']
})
export class ArchivedPOComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  filterToggle=false;

  items = [
    {Amount:"95000", poref: "OM/BHL/OCT/19-20/1077",  Name:"GV Contractor"   , podate: "07-Oct-2020", deliverydate: "19-Nov-2021", requisition: "5", items: "9",update:"Update",deliverytype:"Regular",approvedby:"Perry Barnevik",status:"Archived"},
    {Amount:"130000", poref: "OM/BHL/OCT/19-20/1078", Name:"ABC Contractor"   , podate: "09-Oct-2021", deliverydate: "15-Dec-2021", requisition: "4", items: "6",update:"Update",deliverytype:"Staggered",approvedby:"Abraham Forssell",status:"Archived"},
    {Amount:"75000", poref: "OM/BHL/OCT/19-20/1079", Name:"PVST Contractor"   , podate: "10-July-2021", deliverydate: "07-Aug-2021", requisition: "5", items: "8",update:"Update",deliverytype:"Regular",approvedby:"Adolf Fredrik",status:"Archived"},
    {Amount:"43000", poref: "OM/BHL/OCT/19-20/1080", Name:"HSDS Contractor"   ,podate: "12-Oct-2021", deliverydate: "19-Nov-2021", requisition: "3", items: "9",update:"Update",deliverytype:"Staggered",approvedby:"Ole Andress Halvorsen",status:"Archived"},
    {Amount:"12000", poref: "OM/BHL/OCT/19-20/1081", Name:"ABC Contractor"   , podate: "14-Nov-2021", deliverydate: "15-Dec-2021", requisition: "5", items: "7",update:"Update",deliverytype:"Regular",approvedby:"Adolf Fredrik",status:"Archived"},
    
  ];

  requsitionpop(){
    this.dialog.open(ReqisitionArchivedPopupComponent ,{
      height:'auto',
      width:'1000px'
    });
  }    
  itemspop(){
    this.dialog.open(ItemsArchivedPopupComponent,{
      height:'auto',
      width:'1020px'
    });
  }    


































































  //////////////////below is the previous code with accordians////////////////
  // taskData = [
  //   {
  //     "taskBudgetId": 1259,
  //     "budgetId": 172,
  //     "taskId": 13,
  //     "taskName": "OM/REQ/SPA-JAN-19/1011",
  //     "ref": "Backhoe Loader",
  //     "target_date": "Refurbished",
  //     "totalBudgetCostSOW": 4,
  //     "totalBudgetHoursSOW": 3,
  //     "totalQuotedCostSOW": 0,
  //     "Data": [
  //       {
  //         "jobCodeBudgetId": 2101,
  //         "taskBudgetId": 1259,
  //         "jobCodeId": 96,
  //         "plannedHours": 2,
  //         "rate": 60,
  //         "total": 120,
  //         "notes": "Quote Preparation",
  //         "isUserAdded": null,
  //         "isDeleted": false
  //       },
  //     ],
  //     "taskManageId": null
  //   },
  //   {
  //     "taskBudgetId": 1260,
  //     "budgetId": 172,
  //     "taskId": 1,
  //     "taskName": "OM/REQ/SPA-FEB-19/1055",
  //     "ref": "Backhoe Loader",
  //     "target_date": "Refurbished",
  //     "totalBudgetCostSOW": 60,
  //     "totalBudgetHoursSOW": 1,
  //     "totalQuotedCostSOW": 0,
  //     "Data": [
  //       {
  //         "jobCodeBudgetId": 2103,
  //         "taskBudgetId": 1260,
  //         "jobCodeId": 52,
  //         "plannedHours": 1,
  //         "rate": 60,
  //         "total": 60,
  //         "notes": "Client Contact",
  //         "isUserAdded": null,
  //         "isDeleted": false
  //       }
  //     ],
  //     "taskManageId": null
  //   },
  //   {
  //     "taskBudgetId": 1261,
  //     "budgetId": 172,
  //     "taskId": 9,
  //     "taskName": "OM/REQ/SPA-FEB-19/1055",
  //     "ref": "Backhoe Loader",
  //     "target_date": "Refurbished",
  //     "totalBudgetCostSOW": 160,
  //     "totalBudgetHoursSOW": 2,
  //     "totalQuotedCostSOW": 0,
  //     "Data": [
  //       {
  //         "jobCodeBudgetId": 2104,
  //         "taskBudgetId": 1261,
  //         "jobCodeId": 89,
  //         "plannedHours": 1,
  //         "rate": 60,
  //         "total": 60,
  //         "notes": "Initial Project Setup",
  //         "isUserAdded": null,
  //         "isDeleted": false
  //       },
  //     ],
  //     "taskManageId": null
  //   },
  //   {
  //     "taskBudgetId": 1262,
  //     "budgetId": 172,
  //     "taskId": 10,
  //     "taskName": "OM/REQ/SPA-JAN-19/1012",
  //     "ref": "Backhoe Loader",
  //     "target_date": "Refurbished",
  //     "totalBudgetCostSOW": 335,
  //     "totalBudgetHoursSOW": 4,
  //     "totalQuotedCostSOW": 0,
  //     "Data": [
  //       {
  //         "jobCodeBudgetId": 2106,
  //         "taskBudgetId": 1262,
  //         "jobCodeId": 84,
  //         "plannedHours": 1,
  //         "rate": 110,
  //         "total": 110,
  //         "notes": "Initial Fieldwork",
  //         "isUserAdded": null,
  //         "isDeleted": false
  //       },
  //     ],
  //     "taskManageId": null
  //   },
  // ]

  // addJobCodeCustom(taskId) {
  //   //Pushing the new Job Code to the Task which is taken as parameter
  //   this.taskData.forEach((x) => {
  //     if (x.taskId == taskId) {
  //       x.Data.push({
  //         "jobCodeBudgetId": 2101,
  //         "taskBudgetId": 1259,
  //         "jobCodeId": 96,
  //         "plannedHours": 2,
  //         "rate": 60,
  //         "total": 120,
  //         "notes": "Quote Preparation",
  //         "isUserAdded": null,
  //         "isDeleted": false
  //       });
  //     }
  //   })
  // }

  // onTabOpen(e) {
  //   this.taskData[e.index]['selected'] = true;
  // }
  // onTabClose(e) {
  //   this.taskData[e.index]['selected'] = false;
  // }

  // changesmade(){
  //   this.dialog.open(ChangesmadepopPublishedComponent,{
  //     height:'auto',
  //     width:'700px'
  //   });
  // }
  // Approvalbystage(){
  //   this.dialog.open(ApprovalByStageDialogComponent ,{
  //     height:'auto',
  //     width:'700px'
  //   });
  // }

}
