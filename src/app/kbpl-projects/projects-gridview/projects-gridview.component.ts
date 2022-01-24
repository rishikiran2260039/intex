import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import {AddProjectDialogComponent} from '../add-project-dialog/add-project-dialog.component';
import {GridColumnsProjectsDialogComponent} from '../grid-columns-projects-dialog/grid-columns-projects-dialog.component';
import {ContractsDialogComponent} from '../contracts-dialog/contracts-dialog.component';
import { AddNotesContractorsComponent } from './add-notes-contractors/add-notes-contractors.component';
import { ShowIssueComponent } from './show-issue/show-issue.component';
import { Title } from '@angular/platform-browser';
import { MainProjectNotesComponent } from '../intex-projectdashboard/project-procurement/project-materialissue/project-notes/main-project-notes/main-project-notes.component';
import { AddprojectreportsComponent } from '../projects-reports/addprojectreports/addprojectreports.component';
import { UploadDocComponent } from 'src/app/shared/upload-doc/upload-doc.component';

declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-projects-gridview',
  templateUrl: './projects-gridview.component.html',
  styleUrls: ['./projects-gridview.component.scss']
})
export class ProjectsGridviewComponent implements OnInit {

  constructor(public dialog: MatDialog,private titleService: Title) { }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle("Om Sai Intex | Projects");

  }

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

  values = [
    {gst:"27AASCU9603R1ZN",sow:"Add",sopo:"2022324/1",Id:"27AASCU9603R1ZN",BG:"Add",BOCW:"Add",handover:"3/5",reports:"11",contracts:"5",projectmanager:"Raj", stageColour: '#00ff0040',"Status": 1,projectname:"Raheja",projectcode:"EAI",contractor:"GV Contracors",contact:"Anup",email:"anup@eai.com",phone:"9978515470",address:"Sector 42",startDate:"02-09-2020",targetDate:"02-09-2020",budget:"$7,000",state:"Haryana",city:"Faridabad",contratcs:"8",date:"15-Dec-2019",status:"Initial"},
    {gst:"57AABDS5603R1ZN",sow:"View",sopo:"2342324/2",Id:"27AASCU34403R1ZN",BG:"View",BOCW:"View",handover:"3/5",reports:"11",contracts:"5",projectmanager:"Teja", stageColour: '#C0C0C0',"Status": 2,projectname:"Dr.Reddy's",projectcode:"VSF",contractor:"HBVC Systems",contact:"Angad",email:"angad@vsf.com",phone:"9976829180",address:"Vijay Nagar",startDate:"02-09-2020",targetDate:"02-09-2020",budget:"$7,000",state:"Karnataka",city:"Bangalore",contratcs:"15",date:"19-Nov-2019",status:"On Hold"},
    {gst:"47AABCU9603R1ZN",sow:"Add",sopo:"252364/3",Id:"27AAS453303R1ZN",BG:"Add",BOCW:"Add",handover:"3/5",reports:"11",contracts:"5",projectmanager:"Krishna", stageColour: '#87CEFA',"Status": 3,projectname:"Reva Group",projectcode:"RVG",contractor:"ABC Contractors",contact:"Arnab",email:"arnab@rvg.com",phone:"7760002206",address:"Bandra",startDate:"02-09-2020",targetDate:"02-09-2020",budget:"$7,000",state:"Maharastra",city:"Mumbai",contratcs:"12",date:"04-Nov-2019",status:"Completed"},
    {gst:"67ASBCS9603R1ZN",sow:"View",sopo:"2022124/1",Id:"27A456339603R1ZN",BG:"View",BOCW:"View",handover:"3/5",reports:"11",contracts:"5",projectmanager:"Sai", stageColour: '#FFA50069',"Status": 4,projectname:"Dr.Reddy's",projectcode:"VSF",contractor:"HBVC Systems",contact:"Angad",email:"angad@vsf.com",phone:"9976829180",address:"Vijay Nagar",startDate:"02-09-2020",targetDate:"02-09-2020",budget:"$7,000",state:"Karnataka",city:"Hubballi",contratcs:"15",date:"19-Nov-2019",status:"On Hold"},
    {gst:"87AASCU9603R1ZN",sow:"Add",sopo:"2022314/5",Id:"27AASCU5343503R1ZN",BG:"Add",BOCW:"Add",handover:"3/5",reports:"11",contracts:"5",projectmanager:"Neeraja", stageColour: '#C0C0C0',"Status": 2,projectname:"Reva Group",projectcode:"RVG",contractor:"ABC Contractors",contact:"Arnab",email:"arnab@rvg.com",phone:"7760002206",address:"Bandra",startDate:"02-09-2020",targetDate:"02-09-2020",budget:"$7,000",state:"Maharastra",city:"Pune",contratcs:"12",date:"04-Nov-2019",status:"Completed"}



  ]
 
  openGridColumnsDialog(){
    this.dialog.open(GridColumnsProjectsDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }
  uploaddoc()
  {
    let dialogRef = this.dialog.open(UploadDocComponent, {
      data: null,
      height:'auto',
      width:'600px'
    });
    dialogRef.afterClosed().subscribe(data => {
     // this.getAllUsers();
    });
  }
  openAddProjectDialog(id){
    this.dialog.open(AddProjectDialogComponent,{
      data:id,
      width:"800px",
      height:"auto"
    })
  }


  downloadPdf() {
    const pdfUrl = './assets/data/charter.pdf';
    const pdfName = 'Project Charter';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  AddProjectNotes() {
    const dialogRef = this.dialog.open(AddNotesContractorsComponent, {
      
      autoFocus: false,
      height: 'auto',
      width: '600px',
      
    });
  }

  openContractsDialog(){
    this.dialog.open(ContractsDialogComponent,{
      width:"500px",
      height:"auto"
    })
  }
  statusOptions = [
    {value:1, name: 'Initiated', colorCode: '#00ff0040'},
    {value:2, name: 'Awarded', colorCode: '#C0C0C0'},
    {value:3, name: 'In Process', colorCode: '#87CEFA'},
    {value:4, name: 'On Hold', colorCode: '#FFA50069'},
  ]

   opendocs() {
    let dialogRef = this.dialog.open(ShowIssueComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
    
  changeProgress( value,i) {


    if (!value || value == 0) {
      this.values[i]['focus'] = 25;
    } else if (value == 25) {
      this.values[i]['focus'] = 50;
    } else if (value == 50) {
      this.values[i]['focus'] = 75;
    } else if (value == 75) {
      this.values[i]['focus'] = 100;
    } else {
      this.values[i]['focus'] = 0;
    }
  }
  notes() {
    this.dialog.open(MainProjectNotesComponent, {
     height:'auto',
      width:'700px'
    })
  }
}
