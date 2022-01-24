import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-spl-permissions',
  templateUrl: './spl-permissions.component.html',
  styleUrls: ['./spl-permissions.component.scss']
})
export class SplPermissionsComponent implements OnInit {

  constructor(private location:Location, ) {}
  public screens = [{"name":"Approve Purchase Order","value1":"true","value2":"false","value3":"true","value4":"true"},
        {"name":"Approve Work Order","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Approve Vendor Quotation","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Publish Tenders","value1":true,"value2":true,"value3":true,"value4":true},
    ];
  ngOnInit() {

  }
  goBack() {
    this.location.back();
  }

  savePermissions(){

  
  }

}
