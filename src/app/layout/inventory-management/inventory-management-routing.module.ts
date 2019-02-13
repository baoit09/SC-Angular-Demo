import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductMaintenanceComponent } from './product-maintenance/product-maintenance.component';
import { ProductInquiryComponent } from './product-inquiry/product-inquiry.component';

const routes: Routes = [
  { path: '', component: ProductMaintenanceComponent },
  { path: 'product-maintenance', component: ProductMaintenanceComponent},
  { path: 'product-inquiry', component: ProductInquiryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryManagementRoutingModule { }
