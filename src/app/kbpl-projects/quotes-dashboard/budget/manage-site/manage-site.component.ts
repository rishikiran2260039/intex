import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { ManaSiteComponent } from 'src/app/kbpl-projects/newproject-dashboard/project-budget/mana-site/mana-site.component';

@Component({
  selector: 'app-manage-site',
  templateUrl: './manage-site.component.html',
  styleUrls: ['./manage-site.component.scss']
})
export class ManageSiteComponent implements OnInit {

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog,public dialogRef:MatDialogRef<ManaSiteComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  AddNewBox(){
    document.getElementById("site").innerHTML += '<textarea rows="2" class="form-control txtarea" id="categoryTable" placeholder="Enter Highlights" style="font-size: 22px !important;width:813px;"></textarea> <button  mat-raised-button style="margin-left: 859px;margin-top: -108px;height: 41px;width: 91px;" type="button" class="btn btn-primary"><span class="material-icons" style="margin-left:-34px">save</span><h4 class="ma" style="margin-top:-22px;margin-left:26px;font-size:14px">Save</h4></button><button style="margin-left: 968px;margin-top: -147px;height: 41px;width: 97px;background-color: red;color:white" type="button" class="btn btn-danger"><span class="material-icons" style="margin-left:-42px">delete</span><h4 class="ma" style="margin-top:-22px;margin-left:26px;font-size:14px">Delete</h4></button>';
  }

}
