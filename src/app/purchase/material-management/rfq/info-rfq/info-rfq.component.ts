import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddInfopopupComponent } from './add-infopopup/add-infopopup.component';

@Component({
  selector: 'app-info-rfq',
  templateUrl: './info-rfq.component.html',
  styleUrls: ['./info-rfq.component.scss']
})
export class InfoRfqComponent implements OnInit {

  taskData: any;
  alertService: any;
  dialogRef: any;
  

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

 

  items = [
    {PartMake:"volvo",PartModel:"P-679/23",ItemName : "Volvo", ItemCode: "FMX480", QuantityRequired: "50",unitprice:"5000",total:"250000", itemCategory: "Hand Tools", reference:"OM/REQ/SPA-FEB-19/1057" },
    {AdjustmentDate:"16-Oct-2019",Doneby:"Hari",Part:"421-60-35170",PartName:"volvo",PartMake:"Caterpillar",PartModel:"EC210",EqptCode:"CAT356-DX", EqptName:"Cranes-Eicher",EqptMake:"Caterpillar",EqptModel:"CAT-DX",PhysicalStock:"120",PreviousStock:"100",AdjustmentQty:"20",RevisedBookStock:"120",Category: "Backhoe Loader", SubCategory: "Running Maintenance", ItemName : "Caterpillar", ItemCode: " D85ESS 17", QuantityRequired: "80",unitprice:"3875" ,total:"310000", itemCategory: "Back Hoe Loader", reference:"OM/REQ/SPA/APR-20/1005"},
    {AdjustmentDate:"13-Oct-2019",Doneby:"Raghava",Part:"B229900003680",PartName:"Caterpillar",PartMake:"Kirloskar",PartModel:"EC240",EqptCode:"T-456H", EqptName:"Excavator",EqptMake:"Tata Hitachi",EqptModel:"T-4H",PhysicalStock:"320",PreviousStock:"310",AdjustmentQty:"10",RevisedBookStock:"320",Category: "Backhoe Loader ", SubCategory: "Breakdown Repairs", ItemName : "Mercedes", ItemCode: "All Models", QuantityRequired: "20",unitprice:"2500",total:"50000", itemCategory :"Heavy Equipment", reference:"OM/REQ/SPA-FEB-19/1041" },
    {AdjustmentDate:"19-Oct-2019",Doneby:"Saiprakash",Part:"421-60-35170",PartName:"Kirloskar",PartMake:"Ashok Leyland",PartModel:"EC290",EqptCode:"LA-543", EqptName:"Motor Grade",EqptMake:"Ashok Leyland",EqptModel:"LA-D",PhysicalStock:"180",PreviousStock:"160",AdjustmentQty:"20",RevisedBookStock:"180",Category: "Dump Truck", SubCategory: "Accident Repairs", ItemName : "Tata ", ItemCode: "ACTROS 4841K", QuantityRequired: "30",unitprice:"8333" ,total:"250000", itemCategory: "Hand Tools", reference:"OM/REQ/SPA/FEB-21/1077"},
    {AdjustmentDate:"14-Oct-2019",Doneby:"vamshi",Part:"521-60-34512",PartName:"Ashok Leyland",PartMake:"Tata",PartModel:"EC360",EqptCode:"ED-234F", EqptName:"Dump Truck",EqptMake:"Caterpillar",EqptModel:"ED-F",PhysicalStock:"280",PreviousStock:"275",AdjustmentQty:"5",RevisedBookStock:"280",Category: "Backhoe Loader", SubCategory: "Accident Repairs", ItemName : "Volvo", ItemCode: "D85ESS 86", QuantityRequired: "50",unitprice:"800." ,total:"40000", itemCategory: "Bulldozer", reference:"OM/REQ/SPA/MAR-21/1086" },
  ]

  addnewitem(){
    this.dialog.open(AddInfopopupComponent,{
      height:'auto',
      width:'700px'
    });
  }

  // itemstr: HTMLElement[] = [];
  // agestr: HTMLElement[] = [];
  // responsestr: HTMLElement[] = [];
  // str: HTMLElement = <HTMLElement>document.getElementById("new_text");
  // add=true;
  // sometext =true;
  // allFields = [1];
  // allFields1 = [1];
  // allFields2 = [1];
  // removeItem(index){
  //   this.allFields.splice(index, 1);
  // }
  // removeItem1(index){
  //   this.allFields1.splice(index, 1);
  // }
  // removeItem2(index){
  //   this.allFields2.splice(index, 1);
  // }
  copy(type) {
    // if(type=='lookup')
    //   this.itemstr.push(this.str);
    // else if(type=='age')
    //   this.agestr.push(this.str);
    // else
    //   this.responsestr.push(this.str);
    
  //   this.items.push(  {itemname:"Volvo", itemcode:"FMX480", partnumber:"B229900003680	",Partmake:"volvo"},
  //   {itemname:"Caterpillar", itemcode:"D85ESS 17", partnumber:"421-60-35170		",Partmake:"Caterpillar"},)
    
  // }

  // remove(e) {
  //   document.getElementById("repeat-" + e).remove();
  // }

  // saveLookup() {
  //   this.alertService.createAlert('Successfully Saved.', 1);
  //   this.dialogRef.close();
  // }

  
}
}