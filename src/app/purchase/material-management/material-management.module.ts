import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { QuotationsComponent } from '../quotations/quotations.component';
import { RequisitionComponent } from '../requisition/requisition.component';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';
import { ConsignmentComponent } from './consignment/consignment.component';
import { RfqComponent } from './rfq/rfq.component';
import { AddrfqPopupComponent } from './rfq/addrfq-popup/addrfq-popup.component';
import { AddRequisitionDialogComponent } from '../requisition/add-requisition-dialog/add-requisition-dialog.component';
import { AddConsignmentActiveComponent } from './consignment/active/add-consignment-active/add-consignment-active.component';
import { RfqformComponent } from './rfqform/rfqform.component';
import { GridColomRqComponent } from './grid-colom-rq/grid-colom-rq.component';


export const routes = [
  { path:'', redirectTo:'indent', pathMatch:'full'},
  { path: 'indent', component:RequisitionComponent , loadChildren:"../requisition/requisition.module#RequisitionModule" , data: { breadcrumb: 'Indent'} },
  { path: 'quotaions', component:QuotationsComponent, loadChildren:"../quotations/quotations.module#QuotationsModule" , data: { breadcrumb: 'Quotations'} },
  { path: 'purchase-orders', component:PurchaseOrdersComponent, loadChildren:"./purchase-orders/purchase-orders.module#PurchaseOrdersModule", data: { breadcrumb: 'Purchase Orders' } },
  { path: 'consignments', component:ConsignmentComponent,loadChildren:'./consignment/consignment.module#ConsignmentModule', data: { breadcrumb: 'Consignments'}},
  { path :'rfq' , component: RfqComponent, data: { breadcrumb: 'RFQ' }},
  { path: 'consignments/AddConsignment', component: AddConsignmentActiveComponent ,loadChildren:"./consignment/active/add-consignment-active/add-consignment-active.module#AddConsignmentActiveModule",data: { breadcrumb: 'Add Consignments'}},
  { path :'rfq/rfq-form' , component: RfqformComponent, data: { breadcrumb: 'RFQ Form' }},
  
];

@NgModule({
  declarations: [RequisitionComponent, QuotationsComponent, PurchaseOrdersComponent, AddConsignmentActiveComponent, ConsignmentComponent, AddRequisitionDialogComponent, RfqComponent, AddrfqPopupComponent, RfqformComponent, GridColomRqComponent, ],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents:[AddRequisitionDialogComponent,AddrfqPopupComponent,GridColomRqComponent]
})
export class MaterialManagementModule { }
