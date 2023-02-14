import {Injectable} from '@angular/core';
import {Product} from '../../products/shared/product.model';
import {ProductsCartDto} from './products-cart.dto';
import {ProductService} from '../../products/shared/product.service';
import {Cart} from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsCartService {
  private products: Product[];

  constructor(
    private productService: ProductService
  ) {
  }

  getProductsInCart(cart: Cart): ProductsCartDto[] {
    const productsCart: ProductsCartDto[] =
      ProductsCartService.getProductsCart()
        ? ProductsCartService.getProductsCart()
        : [];
    const productsInCart: ProductsCartDto[] = [];

    for (const productCart of productsCart) {
      if (productCart.cartId === cart.id) {
        productsInCart.push(productCart);
      }
    }

    return productsInCart;
  }

  async getProductsFromCart(cart: Cart): Promise<Product[]> {
    this.products = [];

    for (const productCart of this.getProductsInCart(cart)) {
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
    const productsCart = this.getProductsInCart(cart);

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
    const productsCart = this.getProductsInCart(cart);

    for (const productCart of productsCart) {
      if (
        productCart.productId === product.id
        && productCart.cartId === cart.id
      ) {
        ProductsCartService.deleteProductCart(productsCart, productCart);
        localStorage.setItem('productsCart', JSON.stringify(productsCart));
        break;
      }
    }
  }

  private static getProductsCart() {
    return JSON.parse(localStorage.getItem('productsCart'));
  }

  private static deleteProductCart(
    productsCart: ProductsCartDto[],
    productCart: ProductsCartDto
  ): void {
    if (ProductsCartService.getIndexOfProductCart(productsCart, productCart) > -1) {
      productsCart.splice(ProductsCartService.getIndexOfProductCart(productsCart, productCart), 1);
    }
  }

  private static getIndexOfProductCart(
    productsCart: ProductsCartDto[],
    productCart: ProductsCartDto
  ): number {
    return productsCart.indexOf(productCart, 0);
  }
}
