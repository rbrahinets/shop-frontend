import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../shared/product.model';

@Component({
  selector: 'shop-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() product = new Product();

  constructor() {
  }

  ngOnInit(): void {
  }
}
