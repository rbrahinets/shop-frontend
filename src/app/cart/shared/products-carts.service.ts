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
    productsCart: ProductsCartsDto[],
    productCart: ProductsCartsDto
  ): void {
    if (ProductsCartsService.getIndexOfProductCart(productsCart, productCart) > -1) {
      productsCart.splice(ProductsCartsService.getIndexOfProductCart(productsCart, productCart), 1);
    }
  }

  private static getIndexOfProductCart(
    productsCart: ProductsCartsDto[],
    productCart: ProductsCartsDto
  ): number {
    return productsCart.indexOf(productCart, 0);
  }
}
