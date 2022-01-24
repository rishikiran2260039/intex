import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rfqform',
  templateUrl: './rfqform.component.html',
  styleUrls: ['./rfqform.component.scss']
})
export class RfqformComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  submit(){
    this.router.navigate(['/purchase/procurement/rfq']);
  }
}
