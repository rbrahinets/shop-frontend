import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Product} from '../../products/shared/product.model';
import {ProductsCartsDto} from './products-carts.dto';
import {ProductService} from '../../products/shared/product.service';
import {Cart} from './cart.model';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsCartsService {
  private apiUrl: string = 'http://localhost:8080/products-carts/';

  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {
  }

  getProductsCarts(): Observable<ProductsCartsDto[]> {
    return this.http.get<ProductsCartsDto[]>(this.apiUrl);
  }

  getProductsFromCart(cartId: number): Observable<Product[]> {
    const products: Product[] = [];

    this.getProductsCarts().subscribe(
      (productsCarts: ProductsCartsDto[]) => {
        for (const productCart of productsCarts) {
          if (productCart.cartId === cartId) {
            this.productService.getProduct(
              productCart.productId
            ).subscribe(
              (product: Product) => products.push(product)
            )
          }
        }
      }
    );

    return of(products);
  }

  saveProductToCart(
    product: Product,
    cart: Cart
  ): Observable<ProductsCartsDto> {
    const productCart = new ProductsCartsDto();

    this.getProductsCarts().subscribe(
      (productsCarts: ProductsCartsDto[]) =>
        productCart.id = (productsCarts.length as number) + 1
    );

    productCart.productId = product.id;
    productCart.cartId = cart.id;

    return this.http.post<ProductsCartsDto>(
      this.apiUrl,
      productCart,
      Http.getHttpOptions()
    );
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
