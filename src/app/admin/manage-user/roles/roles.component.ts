import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddRolesComponent } from './add-roles/add-roles.component';
import { RolesService } from './roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {


  roles: Object[] = [
    { intApplicantId: 1, RoleName: 'Admin', user: "2/11",Permissions:'16/16' },
    { intApplicantId: 1, RoleName: 'Manager', user: "3/11",Permissions:'16/16' },
    { intApplicantId: 1, RoleName: 'Marketing Staff', user: "3/11",Permissions:'16/16' },
    { intApplicantId: 1, RoleName: 'sales Staff', user: "3/11",Permissions:'16/16' },
  ];
    // roles:any = [];
    // tableList: Object[] = [];
    alltableListLookup:any;
    public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '10');
    public currentPage = 0;
    public totalSize = 0;
    tableListLookup = [];
    public allReports: Array<any> = [];
    sortedData=[];
    filteredAlerts = [];
    filterForm:FormGroup;    
    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete this.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change status.?';
    public cancelClicked: boolean = false;
    public popoversendMessage: 'Are you sure you want to send.?'
    public popoversendTitle: string = 'Confirm Delete';
    filterToggle: boolean;
    public searchText: string;
    public page: any;

  constructor(public dialog: MatDialog, private fb:FormBuilder, public _rolesService: RolesService, public alertService: AlertService) { }

  ngOnInit() {
    this.getAllRoles();
  }

  getAllRoles(){
    this._rolesService.GetAllRoles().subscribe((data) => {
      this.roles = data['Data'];
    })
  }

  deleteRole(item){
    if (item != null && item !== undefined) {
      this._rolesService.deleteRoles(item).subscribe(data => {
        this.getAllRoles();
        this.alertService.createAlert("Record Deleted Sucessfully",1);
      });
    }
}

  openEditDialog(item) {
    let dialogRef = this.dialog.open(AddRolesComponent, {
      data: {data : item},
      height: 'auto',
      width: '850px'
    });    
    dialogRef.afterClosed().subscribe(data => {
      this.getAllRoles();
    });
  }
}