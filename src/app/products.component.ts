import { ProductService } from './product.service';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-products',
  template:
  `<h2>Products</h2>
  <div *ngFor="let product of products">
  <app-product [data]="product">
  </app-product>
  </div>
  `,
  providers: [ProductService],
})

export class ProductsComponent {
  products;

  constructor(productService: ProductService) {
    this.products = productService.getProducts();
  }

}
