import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { QuotesscreenAddDialogueComponent } from './quotesscreen-add-dialogue/quotesscreen-add-dialogue.component';

@Component({
  selector: 'app-rfq-quotes-popup',
  templateUrl: './rfq-quotes-popup.component.html',
  styleUrls: ['./rfq-quotes-popup.component.scss']
})
export class RfqQuotesPopupComponent implements OnInit {

  taskData: any;
  alertService: any;
  dialogRef: any;

  constructor( ) { }

  ngOnInit() {
  }

 

  items = [
    {itemname:"Volvo", itemcode:"FMX480", partnumber:"B229900003680	",Partmake:"volvo",},
    {itemname:"Caterpillar", itemcode:"D85ESS 17", partnumber:"421-60-35170		",Partmake:"Caterpillar",},
    
  ];


  itemstr: HTMLElement[] = [];
  agestr: HTMLElement[] = [];
  responsestr: HTMLElement[] = [];
  str: HTMLElement = <HTMLElement>document.getElementById("new_text");
  add=true;
  sometext =true;
  allFields = [1];
  allFields1 = [1];
  allFields2 = [1];
  removeItem(index){
    this.allFields.splice(index, 1);
  }
  removeItem1(index){
    this.allFields1.splice(index, 1);
  }
  removeItem2(index){
    this.allFields2.splice(index, 1);
  }
  copy(type) {
    // if(type=='lookup')
    //   this.itemstr.push(this.str);
    // else if(type=='age')
    //   this.agestr.push(this.str);
    // else
    //   this.responsestr.push(this.str);
    
    this.items.push(  {itemname:"Volvo", itemcode:"FMX480", partnumber:"B229900003680	",Partmake:"volvo"},
    {itemname:"Caterpillar", itemcode:"D85ESS 17", partnumber:"421-60-35170		",Partmake:"Caterpillar"},)
    
  }

  remove(e) {
    document.getElementById("repeat-" + e).remove();
  }

  saveLookup() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }




  
}
