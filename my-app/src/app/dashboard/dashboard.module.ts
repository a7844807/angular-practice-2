//import { ShopDetailFormComponent } from './components/configuration/shop-detail-form/shop-detail-form.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryDataService } from './InMemoryData.service';
//import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
//import { DialogComponent } from './components/dialog/dialog.component';

//import { NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    WrapperComponent,
    ProductListComponent,
    ConfigurationComponent,
    ProductDetailsComponent,
    //DialogComponent
   // ShopDetailFormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatSliderModule,
    //MatSidenavModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
   // BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //MatDialogModule,
    //MatDialogRef,
  //  NgForm,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ]
})

export class DashboardModule { }
