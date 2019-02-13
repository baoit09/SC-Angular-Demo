import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryManagementRoutingModule } from './inventory-management-routing.module';
import { ProductMaintenanceComponent } from './product-maintenance/product-maintenance.component';
import { ProductInquiryComponent } from './product-inquiry/product-inquiry.component';

@NgModule({
  declarations: [ProductMaintenanceComponent, ProductInquiryComponent],
  imports: [
    CommonModule,
    InventoryManagementRoutingModule
  ]
})
export class InventoryManagementModule { }
