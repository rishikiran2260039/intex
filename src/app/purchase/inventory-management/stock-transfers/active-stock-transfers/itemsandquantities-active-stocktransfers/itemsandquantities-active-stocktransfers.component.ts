import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemsandquantities-active-stocktransfers',
  templateUrl: './itemsandquantities-active-stocktransfers.component.html',
  styleUrls: ['./itemsandquantities-active-stocktransfers.component.scss']
})
export class ItemsandquantitiesActiveStocktransfersComponent implements OnInit {

  ngOnInit() {
  }
  // <td class="text-center">{{item.itemcode}}</td>
  // <td class="text-center">{{item.itemname}}</td>
  // <td class="text-center">{{item.itemcategory}}</td>
  // <td class="text-center">{{item.sentqty}}</td>
  // <td class="text-center">{{item.receivedqty}}</td>
  // <td class="text-center">{{item.discripancies}}</td>

  items = [
   {itemcode:"FMX480",itemname:"Volvo",itemcategory:"Dump Truck",sentqty:"30",receivedqty:"25",discripancies:"5"},
   {itemcode:"D85ESS 17",itemname:"Caterpillar",itemcategory:"Backhoe Loader	",sentqty:"35",receivedqty:"32",discripancies:"3"},
   {itemcode:"ACTROS 4841K",itemname:"Mercedes",itemcategory:"Backhoe Loader",sentqty:"200",receivedqty:"198",discripancies:"2"},
   {itemcode:"D85ESS 86",itemname:"Tata",itemcategory:"Dump Truck",sentqty:"200",receivedqty:"196",discripancies:"4"},
   {itemcode:"All Models	",itemname:"Volvo",itemcategory:"Backhoe Loader",sentqty:"170",receivedqty:"166",discripancies:"4"},
    
    
  ];
}