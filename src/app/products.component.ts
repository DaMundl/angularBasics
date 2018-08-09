import { ProductsService } from './products.service';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-products',
  template:
  `<h2>Products</h2>
  <ul>
  <li *ngFor="let product of products">
  {{product}}
  </li>
  </ul>`
})

export class ProductsComponent {
  products;

  constructor(productService: ProductsService) {
    this.products = productService.getProducts();
  }

}
