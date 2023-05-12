import { Dialog } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[] = [];
  offset = 0;
  limit = 8;

  constructor(private productService: ProductService, private dialog: Dialog) {}

  ngOnInit(): void {

  }


  openModal(product: Product) {
    this.dialog.open(ModalComponent, {
      
      data: { product: product },
      hasBackdrop: true,
      
    
    });
  }
}
