import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {PromoCodeComponent} from "./promo-code/promo-code.component";
import {Product} from "./model/product.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProductListComponent, PromoCodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products: Product[] = [{
    id: 1,
    image: "https://via.placeholder.com/200x150",
    name: "PRODUCT ITEM NUMBER",
    description: "Description for product item number",
    price: 5.99,
    quantity: 1
  }, {
    id: 2,
    image: "https://via.placeholder.com/200x150",
    name: "PRODUCT ITEM NUMBER",
    description: "Description for product item number",
    price: 9.99,
    quantity: 2
  }, {
    id: 3,
    image: "https://via.placeholder.com/200x150",
    name: "PRODUCT ITEM NUMBER",
    description: "Description for product item number",
    price: 6.99,
    quantity: 4
  }
  ];

  numberProduct: number = 0;
  subTotal: number = 0;

  removeProduct(productId: number): void {
    debugger
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }

    let numberProduct: number = 0;
    let subTotal: number = 0;
    // tính lại tổng số lượng sp
    for (const product of this.products) {
      numberProduct += product.quantity;
      subTotal += product.price * product.quantity;
    }
    this.numberProduct = numberProduct;
    this.subTotal = subTotal;
  }
}
