
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppTourRoutingModule } from './apptour-routing.module';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { ProductDialogComponent } from './components/admin/product-dialog/product-dialog.component';

@NgModule({
  declarations: [ProductListComponent, ProductDialogComponent],
  imports: [
    CommonModule,
    SharedModule, 
    AppTourRoutingModule
  ],
  providers: []
})
export class ApptourModule { }
