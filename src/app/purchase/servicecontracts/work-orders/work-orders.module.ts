import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingComponent } from './pending/pending.component';
import { PublishedComponent } from './published/published.component';
import { ArchivedComponent } from './archived/archived.component';

import { RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { SharedModule } from 'src/app/shared/shared.module';



export const routes = [
  { path:'', redirectTo:'pending', pathMatch:'full'},
  { path: 'pending', component:PendingComponent,},
  { path: 'published', component:PublishedComponent},
  { path: 'archived', component:ArchivedComponent},
 
 
  
];

@NgModule({
  declarations: [PendingComponent, PublishedComponent, ArchivedComponent,   ],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,
    FormsModule
  ],
  entryComponents:[],
})

export class WorkOrdersModule { }
