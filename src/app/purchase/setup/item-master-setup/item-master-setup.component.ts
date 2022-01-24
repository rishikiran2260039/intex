import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddItemMasterSetupComponent } from './add-item-master-setup/add-item-master-setup.component';

@Component({
  selector: 'app-item-master-setup',
  templateUrl: './item-master-setup.component.html',
  styleUrls: ['./item-master-setup.component.scss']
})
export class ItemMasterSetupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddItemMasterSetupComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

  items = [
    {name:'Recor Filter', no:'56107', cat:'Dump Truck', subcat:'Breakdown repairs', uom:'Micron', type:'Dump truck A349', make:'volvo', model:'FMX480', pmake:'Volvo', equi:'-'},
    {name:'Bulb', no:'182048', cat:'Backhole Loader', subcat:'Running Maintaince', uom:'Watts', type:'Loader', make:'caterpillar', model:'CAT D347', pmake:'Caterpillar', equi:'-'},
    {name:'Chain Hook', no:'12-34A/28', cat:'Backhole Loader', subcat:'Breakdown repairs', uom:'Length', type:'Excavator', make:'caterpillar', model:'CAT B214', pmake:'Caterpillar', equi:'-'},
    {name:'Chain Belt', no:'14-12A34', cat:'Bull Dozer', subcat:'Excavators', uom:'Length', type:'Earth Mover', make:'TATA Hitachi', model:'TH 234', pmake:'Kirloskar', equi:'-'},
    {name:'Wires', no:'56107', cat:'VIR Wire', subcat:'Copper', uom:'MM', type:'CTS Wiring', make:'Spykaar', model:'FR0032', pmake:'Spykaar', equi:'-'},
    {name:'Pipes', no:'182048', cat:'Cast Iron', subcat:'B-Vent Pipe', uom:'Feet', type:'Grey Iron', make:'Vizag Steel', model:'Hubless', pmake:'Vizag Steel', equi:'-'},
    {name:'Cement', no:'13254', cat:'Portland', subcat:'Grade 53', uom:'Kg', type:'G213', make:'Ramco', model:'Ramco-53', pmake:'JSW Ramco', equi:'-'},
    {name:'Reinforcement Steel', no:'56135', cat:'TMT', subcat:'TMT H35', uom:'kg/m3', type:'T-23', make:'Altroz', model:'TMT-243', pmake:'SREE TMT', equi:'-'},
    {name:'Electric wire(14-Gauge)', no:'19234', cat:'Double Insulated', subcat:'Copper', uom:'MM', type:'Twisted', make:'Havels', model:'H-23', pmake:'Havels-Bell', equi:'-'},
  ];

  
}