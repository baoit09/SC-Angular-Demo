import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InventoryManagementRoutingModule } from './inventory-management-routing.module';
import { ProductMaintenanceComponent } from './product-maintenance/product-maintenance.component';
import { ProductInquiryComponent } from './product-inquiry/product-inquiry.component';
import { MaterialModule } from '../../material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ProductMaintenanceComponent, ProductInquiryComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    TranslateModule,
    InventoryManagementRoutingModule
  ]
})
export class InventoryManagementModule { }
