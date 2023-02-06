import {Product} from './product.model';
import {Random} from '../../shared/random';

export class RandomProductService {
  static getRandomProducts(
    products: Product[]
  ): Product[] {
    const idsOfProducts: number[] =
      RandomProductService.getIdsOfRandomProducts(products);
    const arrayOfProducts: Product[] = [];

    for (let i = 0; i < RandomProductService.getCountOfRandomProducts(); i++) {
      arrayOfProducts.push(products[idsOfProducts[i]]);
    }

    return arrayOfProducts;
  }

  private static getIdsOfRandomProducts(products: Product[]): number[] {
    return Random.getRandomIds(
      RandomProductService.getCountOfRandomProducts(),
      products.length
    );
  }

  private static getCountOfRandomProducts(): number {
    return 5;
  }
}
