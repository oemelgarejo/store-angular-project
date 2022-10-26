import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product = {
    id: 0,
    price: 0,
    images: [],
    title: '',
    description: '',
    category: {
      id:0,
      name: ''
    }
  }
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<number>();
  constructor() { }

  addToCart() {
    this.addedProduct.emit(this.product);
  }

  onShowDetail() {
    this.showProduct.emit(this.product.id);
  }

}
