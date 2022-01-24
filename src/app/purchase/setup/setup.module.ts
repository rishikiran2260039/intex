import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemMasterSetupComponent } from './item-master-setup/item-master-setup.component';
import { CategoriesSetupComponent } from './categories-setup/categories-setup.component';
import { StoreMasterSetupComponent } from './store-master-setup/store-master-setup.component';
import { UnitMasterSetupComponent } from './unit-master-setup/unit-master-setup.component';
import { JobCodesSetupComponent } from './job-codes-setup/job-codes-setup.component';
import { ContractorsSetupComponent } from './contractors-setup/contractors-setup.component';
import { VendorsSetupComponent } from './vendors-setup/vendors-setup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddItemMasterSetupComponent } from './item-master-setup/add-item-master-setup/add-item-master-setup.component';
import { AddUnitSetupComponent } from './unit-master-setup/add-unit-setup/add-unit-setup.component';
import { JobCodesDialogSetupComponent } from './job-codes-setup/job-codes-dialog-setup/job-codes-dialog-setup.component';
import { AddContractorDialogSetupComponent } from './contractors-setup/add-contractor-dialog-setup/add-contractor-dialog-setup.component';
import { ContractsDialogSetupComponent } from './contractors-setup/contracts-dialog-setup/contracts-dialog-setup.component';
import { AddVendorDialogSetupComponent } from './vendors-setup/add-vendor-dialog-setup/add-vendor-dialog-setup.component';
import { AddNewStoreSetupComponent } from './store-master-setup/add-new-store-setup/add-new-store-setup.component';
import { EmailsSetupComponent } from './store-master-setup/emails-setup/emails-setup.component';
import { SparesSetupComponent } from './store-master-setup/spares-setup/spares-setup.component';
import { StoreInchargeSetupComponent } from './store-master-setup/store-incharge-setup/store-incharge-setup.component';
import { TechnicalSetupComponent } from './store-master-setup/technical-setup/technical-setup.component';
import { TypeSetupComponent } from './store-master-setup/type-setup/type-setup.component';
import { LocationSetupComponent } from './store-master-setup/location-setup/location-setup.component';
import { FloorLocationSetupComponent } from './store-master-setup/location-setup/floor-location-setup/floor-location-setup.component';
import { RackSetupComponent } from './store-master-setup/location-setup/rack-setup/rack-setup.component';
import { AddNewFloorLocationSetupComponent } from './store-master-setup/location-setup/floor-location-setup/add-new-floor-location-setup/add-new-floor-location-setup.component';
import { AddNewRackSetupComponent } from './store-master-setup/location-setup/rack-setup/add-new-rack-setup/add-new-rack-setup.component';
import { AddNewRowSetupComponent } from './store-master-setup/location-setup/rack-setup/add-new-row-setup/add-new-row-setup.component';
import { ServiceSubCategoriesComponent } from './categories-setup/service-categories/service-sub-categories/service-sub-categories.component';
import { ServiceSubCatPopupComponent } from './categories-setup/service-categories/service-sub-categories/service-sub-cat-popup/service-sub-cat-popup.component';
import { PurchaseOrderDetailsPopupComponent } from './vendors-setup/purchase-order-details-popup/purchase-order-details-popup.component';
import { WorkOrderDetailsPopupComponent } from './vendors-setup/work-order-details-popup/work-order-details-popup.component';
import { TermsMasterSetupComponent } from './terms-master-setup/terms-master-setup.component';
import { TermsTemplateSetupComponent } from './terms-template-setup/terms-template-setup.component';
import { NarrationsPopupComponent } from './terms-master-setup/narrations-popup/narrations-popup.component';
import { AddPopupTermsmasterComponent } from './terms-master-setup/add-popup-termsmaster/add-popup-termsmaster.component';
import { SaveNewTemplatePoTermsComponent } from './terms-template-setup/save-new-template-po-terms/save-new-template-po-terms.component';
import { SaveNewTemplateServTermsComponent } from './terms-template-setup/save-new-template-serv-terms/save-new-template-serv-terms.component';
import { NarrationsPoPopupComponent } from './terms-template-setup/narrations-po-popup/narrations-po-popup.component';
import { NarrationsServPopupComponent } from './terms-template-setup/narrations-serv-popup/narrations-serv-popup.component';
import { PurchaseorderPopupComponent } from './terms-template-setup/purchaseorder-popup/purchaseorder-popup.component';
import { WorkorderPopupComponent } from './terms-template-setup/workorder-popup/workorder-popup.component';




export const routes = [
  { path:'', redirectTo:'itemmaster-setup', pathMatch:'full'},
  { path: 'itemmaster-setup', component:ItemMasterSetupComponent , data: { breadcrumb: 'Item Master'} },
  { path: 'categories-setup', component:CategoriesSetupComponent , data: { breadcrumb: 'Categories'}, loadChildren: "./categories-setup/categories-setup.module#CategoriesSetupModule" },
  { path: 'storemaster-setup', component:StoreMasterSetupComponent, data: { breadcrumb: 'Store Master'} },
  { path: 'unitmaster-setup', component:UnitMasterSetupComponent, data: { breadcrumb: 'Unit Master'}},
  { path: 'jobcodes-setup',component: JobCodesSetupComponent, data: { breadcrumb: 'Job Codes' }},
  { path :'contractors-setup' ,component:ContractorsSetupComponent, data: { breadcrumb: 'Contractors' }},
  { path :'vendors-setup' ,component:VendorsSetupComponent, data: { breadcrumb: 'Vendors' }},
  { path: 'location-setup', component: LocationSetupComponent,children:[
    { path: '', redirectTo: 'floor-location-setup', pathMatch: 'full' },
    { path: 'floor-location-setup', component: FloorLocationSetupComponent, data: { breadcrumb: 'Floor Location' }},
    { path: 'rack-setup', component: RackSetupComponent, data: { breadcrumb: 'Rack/Bin' }},
  ]},
  { path :'ServiceSubCategories' ,component:ServiceSubCategoriesComponent, data: { breadcrumb: '' }},
  { path :'TermsMaster' ,component:TermsMasterSetupComponent, data: { breadcrumb: 'Terms Master' }},
  { path :'TermsTemplate' ,component:TermsTemplateSetupComponent, data: { breadcrumb: 'Terms Template' }},
];

@NgModule({
  declarations: [ItemMasterSetupComponent, CategoriesSetupComponent, StoreMasterSetupComponent, UnitMasterSetupComponent,
     JobCodesSetupComponent, ContractorsSetupComponent, VendorsSetupComponent, AddItemMasterSetupComponent,
     AddItemMasterSetupComponent,AddUnitSetupComponent, JobCodesDialogSetupComponent, AddContractorDialogSetupComponent,
      ContractsDialogSetupComponent, AddVendorDialogSetupComponent, AddNewStoreSetupComponent, EmailsSetupComponent, SparesSetupComponent,
       StoreInchargeSetupComponent, TechnicalSetupComponent, TypeSetupComponent, LocationSetupComponent, FloorLocationSetupComponent, RackSetupComponent,
        AddNewFloorLocationSetupComponent, AddNewRackSetupComponent, AddNewRowSetupComponent,ServiceSubCategoriesComponent,
        ServiceSubCatPopupComponent,PurchaseOrderDetailsPopupComponent,WorkOrderDetailsPopupComponent, TermsMasterSetupComponent, TermsTemplateSetupComponent, NarrationsPopupComponent, AddPopupTermsmasterComponent, SaveNewTemplatePoTermsComponent, SaveNewTemplateServTermsComponent, NarrationsPoPopupComponent, NarrationsServPopupComponent, PurchaseorderPopupComponent, WorkorderPopupComponent,],
        
        
     
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents:[AddItemMasterSetupComponent,AddUnitSetupComponent,JobCodesDialogSetupComponent,ContractsDialogSetupComponent,AddContractorDialogSetupComponent,AddVendorDialogSetupComponent,
     AddNewStoreSetupComponent, EmailsSetupComponent, SparesSetupComponent, StoreInchargeSetupComponent, TechnicalSetupComponent, TypeSetupComponent ,AddNewFloorLocationSetupComponent, AddNewRackSetupComponent,
      AddNewRowSetupComponent, ServiceSubCatPopupComponent,PurchaseOrderDetailsPopupComponent,WorkOrderDetailsPopupComponent, NarrationsPopupComponent,AddPopupTermsmasterComponent,SaveNewTemplatePoTermsComponent,
       SaveNewTemplateServTermsComponent, NarrationsPoPopupComponent, NarrationsServPopupComponent, PurchaseorderPopupComponent, WorkorderPopupComponent,]
})
export class SetupModule { }
