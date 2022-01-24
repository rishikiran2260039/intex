import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PurchaseComponent } from './purchase/purchase/purchase.component';
import { AnalyticsComponent } from './analytics/analytics.component';

export const routes: Routes = [
    { path: '', loadChildren: './logins/logins.module#LoginsModule', data: { breadcrumb: 'Login' } },
    {
        path: '',
        component: LayoutComponent, children: [
            { path: '', redirectTo: 'dashboard/radar', pathMatch: 'full' },
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule', data: { breadcrumb: 'Carriers' } },
            { path: 'dashboard', loadChildren: './analytics/analytics.module#AnalyticsModule', component: AnalyticsComponent, data: { breadcrumb: 'Radar' } },
            { path: 'clients', loadChildren: './clients/clients.module#ClientsModule', data: { breadcrumb: 'Clients' } },
            { path: 'projects', loadChildren:'./kbpl-projects/kbpl-projects.module#KBPLProjectsModule', data: { breadcrumb: 'Projects' } },
            { path: 'contracts', loadChildren: './mrc-projects/mrc-projects.module#MrcProjectsModule', data: { breadcrumb: '' } },
            { path: 'purchase', loadChildren:'./purchase/purchase.module#PurchaseModule',component:PurchaseComponent, data: { breadcrumb: 'Purchase Orders' } },
        ]
    },
    { path: '**', component: NotFoundComponent, data: { breadcrumb: 'Not found' } }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    useHash: true
});