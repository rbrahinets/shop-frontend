import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../products/shared/product.model';
import {SortProductsService} from '../shared/sort-products.service';

@Component({
  selector: 'shop-products-sort',
  templateUrl: './sort-products.component.html',
  styleUrls: ['./sort-products.component.css']
})
export class SortProductsComponent implements OnInit {
  @Input() products: Product[];
  sortTypes: string[];

  constructor(
    private sortProductsService: SortProductsService
  ) {
    this.sortTypes = ['Ім\'я[А-Я]', 'Ім\'я[Я-А]', 'Ціна[0-9]', 'Ціна[9-0]'];
  }

  ngOnInit(): void {
  }

  sortProducts(typeSort: string): void {
    if (typeSort === this.sortTypes[0]) {
      this.products = this.sortProductsService.sortByNameAsc(this.products);
    } else if (typeSort === this.sortTypes[1]) {
      this.products = this.sortProductsService.sortByNameDesc(this.products);
    } else if (typeSort === this.sortTypes[2]) {
      this.products = this.sortProductsService.sortByPriceAsc(this.products);
    } else if (typeSort === this.sortTypes[3]) {
      this.products = this.sortProductsService.sortByPriceDesc(this.products);
    }
  }
}
