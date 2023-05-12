import { Component, Inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Product } from 'src/app/models/product.model';

interface inputData {
  product: Product;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  
})
export class ModalComponent {
  product: Product;

  constructor(
    @Inject(DIALOG_DATA) public data: inputData,
    private dialogRef: DialogRef
  ) {
    this.product = data.product;
  }

  close() {
    this.dialogRef.close();
  }
}
