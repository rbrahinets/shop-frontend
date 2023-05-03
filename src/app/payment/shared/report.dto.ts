import {Product} from '../../products/shared/product.model';

export class ReportDto {
  products: Product[];
  priceAmount: number;

  constructor(
    products: Product[],
    priceAmount: number
  ) {
    this.products = products;
    this.priceAmount = priceAmount;
  }
}
