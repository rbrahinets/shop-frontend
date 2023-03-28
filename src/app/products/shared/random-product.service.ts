import {Product} from './product.model';
import {Random} from '../../shared/random';

export class RandomProductService {
  static getRandomProducts(
    products: Product[],
    count: number
  ): Product[] {
    const idsOfProducts: number[] =
      RandomProductService.getIdsOfRandomProducts(products, count);
    const arrayOfProducts: Product[] = [];

    for (let i = 0; i < count; i++) {
      arrayOfProducts.push(products[idsOfProducts[i]]);
    }

    return arrayOfProducts;
  }

  private static getIdsOfRandomProducts(
    products: Product[],
    count: number
  ): number[] {
    return Random.getRandomIds(
      count,
      products.length
    );
  }
}
