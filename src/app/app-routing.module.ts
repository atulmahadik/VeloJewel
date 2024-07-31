import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { authGuard } from './auth/auth.guard';
import { CommonModule } from '@angular/common';

const routes : Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'home', component: AppLayoutComponent,
        children: [
            // { path: '', loadChildren: () => import('./demo/components/auth/login/login.module').then(m => m.LoginModule) },
            { path: 'customer', loadChildren: () => import('./components/customer/customer.module').then(m => m.CustomerModule), canActivate: [authGuard] },
            { path: '', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [authGuard] },
            // { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
            // { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
            // { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
            // { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
            // { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
        ]
    },
    { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
    // { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
    // { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
    { path: 'notfound', component: NotfoundComponent },
    { path: '**', redirectTo: '/notfound' },
]

@NgModule({
    imports: [CommonModule,
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload',useHash : true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
