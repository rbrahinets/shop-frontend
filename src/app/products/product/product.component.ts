import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../shared/product.model";

@Component({
  selector: 'shop-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() onClickLink: EventEmitter<Product> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(product: Product): void {
    this.onClickLink.emit(product);
  }
}
