import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreInChargeComponent } from './store-in-charge/store-in-charge.component';
import { TechEngineerComponent } from './tech-engineer/tech-engineer.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChangesdialougeComponent } from './store-in-charge/changesdialouge/changesdialouge.component';
import { TaxInvoicePopGrnComponent } from './store-in-charge/tax-invoice-pop-grn/tax-invoice-pop-grn.component';





export const routes = [
  { path:'', redirectTo:'store-incharge', pathMatch:'full'},   
  { path: 'store-incharge', component:StoreInChargeComponent, data: { breadcrumb: 'Store Incharge'} },
  { path: 'tech-engineer', component:TechEngineerComponent, data: { breadcrumb: 'Tech Engineer'} },
  
 
];

@NgModule({
  declarations: [StoreInChargeComponent, TechEngineerComponent, ChangesdialougeComponent, TaxInvoicePopGrnComponent, ], //
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents:[ChangesdialougeComponent, TaxInvoicePopGrnComponent ]
})
export class GrnModule { }
