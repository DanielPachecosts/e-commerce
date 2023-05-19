import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ModalComponent } from './components/modal/modal.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ModalComponent,
    CategoriesComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, SharedModule, FontAwesomeModule],
  exports: [
    ProductsComponent,
    ProductComponent,
    ModalComponent,
    CategoriesComponent,
  ]
})
export class ProductsModule {}
