import {Injectable} from '@angular/core';
import {Product} from '../../products/shared/product.model';
import {ProductsCartDto} from './products-cart.dto';
import {ProductService} from '../../products/shared/product.service';
import {Cart} from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsCartsService {
  private readonly products: Product[];

  constructor(
    private productService: ProductService
  ) {
    this.products = [];
  }

  getProductsInCart(): ProductsCartDto[] {
    return JSON.parse(localStorage.getItem('productsCart')) as ProductsCartDto[];
  }

  async getProductsFromCart(): Promise<Product[]> {
    const productsCart = this.getProductsInCart() ? this.getProductsInCart() : [];
    for (const productCart of productsCart) {
      await this.productService.getProduct(
        productCart.productId
      ).then(
        (product: Product) => this.products.push(product)
      );
    }

    return this.products;
  }

  saveProductToCart(
    product: Product,
    cart: Cart
  ): void {
    const productsCart = this.getProductsInCart() ? this.getProductsInCart() : [];

    const productCart = new ProductsCartDto();
    productCart.id = productsCart.length + 1;
    productCart.productId = product.id;
    productCart.cartId = cart.id;

    productsCart.push(productCart);
    localStorage.setItem('productsCart', JSON.stringify(productsCart));
  }

  deleteProductFromCart(
    product: Product,
    cart: Cart
  ): void {
    const productsCart = this.getProductsInCart() ? this.getProductsInCart() : [];

    for (const productCart of productsCart) {
      if (
        productCart.productId === product.id
        && productCart.cartId === cart.id
      ) {
        ProductsCartsService.deleteProductCart(productsCart, productCart);
        localStorage.setItem('productsCart', JSON.stringify(productsCart));
        break;
      }
    }
  }

  private static deleteProductCart(
    productsCart: ProductsCartDto[],
    productCart: ProductsCartDto
  ): void {
    if (ProductsCartsService.getIndexOfProductCart(productsCart, productCart) > -1) {
      productsCart.splice(ProductsCartsService.getIndexOfProductCart(productsCart, productCart), 1);
    }
  }

  private static getIndexOfProductCart(
    productsCart: ProductsCartDto[],
    productCart: ProductsCartDto
  ): number {
    return productsCart.indexOf(productCart, 0);
  }
}
