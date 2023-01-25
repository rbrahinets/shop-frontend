import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Product} from '../../products/shared/product.model';
import {ProductsCartsDto} from './products-carts.dto';
import {ProductService} from '../../products/shared/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsCartsService {
  private apiUrl = 'http://localhost:8080/products-carts';

  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {
  }

  getProductsCarts(): Observable<ProductsCartsDto[]> {
    return this.http.get<ProductsCartsDto[]>(this.apiUrl);
  }

  getProductsFromCart(cartId: number): Observable<Product[]> {
    let products: Product[] = [];

    this.getProductsCarts().subscribe(
      (productsCarts) => {
        for (const productCart of productsCarts) {
          if (productCart.cartId === cartId) {
            this.productService.getProduct(productCart.productId).subscribe(
              (product) => products.push(product)
            )
          }
        }
      }
    );

    return of(products);
  }
}
