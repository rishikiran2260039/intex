import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceComponent } from './finance.component';
import { RouterModule } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { PayableComponent } from './payable/payable.component';
import { ReceievablesComponent } from './receievables/receievables.component';

export const routes = [
  { path: '', redirectTo:'receivables', pathMatch: 'full'},  //accounting
   { path: 'payables', loadChildren: './payable/payable.module#PayableModule',component:PayableComponent, data: { breadcrumb: 'Payables' } },
   { path: 'receivables', loadChildren: './receievables/receievables.module#ReceievablesModule',component:ReceievablesComponent, data: { breadcrumb: 'Receivables' } },
  // { path: 'receivables', component: ReceievablesComponent, loadChildren: './receievables/receievables.module#ReceievablesModule',pathMatch: 'full'},
  // { path: 'payables', component: PayableComponent,loadChildren: './payable/payable.module#PayableModule'},
];

@NgModule({
  declarations: [PayableComponent,ReceievablesComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  providers: [AlertService],
})

export class FinanceModule { }
