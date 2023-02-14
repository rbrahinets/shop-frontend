import {Injectable} from '@angular/core';
import {Product} from '../../products/shared/product.model';
import {ProductsCartsDto} from './products-carts.dto';
import {ProductService} from '../../products/shared/product.service';
import {Cart} from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsCartsService {
  constructor(
    private productService: ProductService
  ) {
  }

  getProductsInCart(): ProductsCartsDto[] {
    return JSON.parse(localStorage.getItem('productsCart')) as ProductsCartsDto[];
  }

  getProductsCarts(): Observable<ProductsCartsDto[]> {
    return this.http.get<ProductsCartsDto[]>(this.apiUrl);
  }

  getProductsFromCart(cartId: number): Product[] {
    const products: Product[] = [];

    this.getProductsCarts().subscribe(
      (productsCarts: ProductsCartsDto[]) => {
        for (const productCart of productsCarts) {
          if (productCart.cartId === cartId) {
            this.productService.getProduct(
              productCart.productId
            ).subscribe(
              (product: Product) => products.push(product)
            );
          }
        }
      }
    );

    return products;
  }

  saveProductToCart(
    product: Product,
    cart: Cart
  ): void {
    const productsCart = this.getProductsInCart() ? this.getProductsInCart() : [];

    const productCart = new ProductsCartsDto();
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
    this.getProductsCarts().subscribe(
      (productsCarts: ProductsCartsDto[]) => {
        for (const productCart of productsCarts) {
          if (
            productCart.productId === product.id
            && productCart.cartId === cart.id
          ) {
            this.http.delete<ProductsCartsDto>(
              `${this.apiUrl + productCart.id}`
            ).subscribe();
            break;
          }
        }
      }
    );
  }
}
