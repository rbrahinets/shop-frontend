import {Injectable} from '@angular/core';
import {Product} from '../../products/shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class SortProductsService {
  sortByNameAsc(products: Product[]): Product[] {
    return products.sort(
      (
        product1: Product,
        product2: Product
      ) => {
        if (product1.name > product2.name) {
          return 1;
        } else if (product1.name < product2.name) {
          return -1;
        }

        return 0;
      }
    );
  }

  sortByNameDesc(products: Product[]): Product[] {
    return this.sortByNameAsc(products).reverse();
  }
}
