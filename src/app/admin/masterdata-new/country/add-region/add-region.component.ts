import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.scss']
})
export class AddRegionComponent implements OnInit {
  dialogRef: any;

  constructor() { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
