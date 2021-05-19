import { ProductListComponent } from './components/product-list/product-list.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
    {
        path: '',
        component: WrapperComponent,
        children: [
            {
                path: 'configuration',
                component: ConfigurationComponent
            },
            {
                path: 'product-list',
                component: ProductListComponent
            },
            {
                path: 'detail/:id', component: ProductDetailsComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }