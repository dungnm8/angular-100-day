import {Component, Input, OnInit, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Product} from "../model/product.model";
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];
  @Output() onRemoveProduct = new EventEmitter<number>();


  ngOnInit(): void {
  }

  removeProduct(productId: number): void {
    debugger
    this.onRemoveProduct.emit(productId);
  }

  updateQuantity(element: HTMLInputElement): void {
    console.log(element.value);
  }
}
