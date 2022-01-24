import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { ItemsActiveConsignmentComponent } from './items-active-consignment/items-active-consignment.component';
import { InvoicingActiveConsignmentComponent } from './invoicing-active-consignment/invoicing-active-consignment.component';
import { TransportActiveConsignmentComponent } from './transport-active-consignment/transport-active-consignment.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragulaModule } from 'ng2-dragula';

import { SharedModule } from 'src/app/shared/shared.module';
import { AddItemInvoiceConsignmentComponent } from './invoicing-active-consignment/add-item-invoice-consignment/add-item-invoice-consignment.component';

export const routes = [
  { path:'', redirectTo:'overview-consignment', pathMatch:'full'},
  { path: 'overview-consignment', component:OverviewComponent},
  { path: 'items-consignment', component:ItemsActiveConsignmentComponent},
  { path: 'invoicing-consignment', component: InvoicingActiveConsignmentComponent},
  { path: 'transport-consignment', component:TransportActiveConsignmentComponent},
 
];

@NgModule({
  declarations: [OverviewComponent, ItemsActiveConsignmentComponent, InvoicingActiveConsignmentComponent, TransportActiveConsignmentComponent, AddItemInvoiceConsignmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
    DragulaModule,
    SharedModule,
    ConfirmationPopoverModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents:[AddItemInvoiceConsignmentComponent ]
})
export class AddConsignmentActiveModule { }
