import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {
  constructor(private location:Location, ) {}
  public screens = [{"name":"Project Dashboard","value1":"true","value2":"false","value3":"true","value4":"true"},
        {"name":"Admin >> Manage Users >> Users","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Admin >> Manage Users >> Roles","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Admin >> Masterdata >> Expenses Codes","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Admin >> Masterdata >> Project Types","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Admin >> Masterdata >> Industry Master","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Admin >> Masterdata >> Country Master","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Admin >> Masterdata >> Site Master","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Clients","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Projects >> Grid View","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Projects >> Kanban View","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Project Dashboard >> Procurement >> Indent","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Project Dashboard >> Procurement >> RFQ","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Project Dashboard >> Procurement >> Quotations","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Project Dashboard >> Procurement >> Purchase Orders","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Project Dashboard >> Procurement >> Consignments","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Project Dashboard >> Store Management >> GRN","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Project Dashboard >> Store Management >> Stock Transfers","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Project Dashboard >> Store Management >> Material Issues","value1":true,"value2":true,"value3":true,"value4":true},
       
       
        {"name":"Logistics","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Masterdata","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Users","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Kanban","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Settings","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Lookup","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Alerts","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Messages","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Project Dashboard","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Help","value1":true,"value2":true,"value3":true,"value4":true}];
  ngOnInit() {

  }
  goBack() {
    this.location.back();
  }

  savePermissions(){

  
  }

}
