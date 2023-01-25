import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Product} from '../shared/product.model';
import {ProductService} from '../shared/product.service';
import {ProductsCartsService} from '../../cart/shared/products-carts.service';
import {CartService} from '../../cart/shared/cart.service';
import {Cart} from '../../cart/shared/cart.model';

@Component({
  selector: 'shop-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product = new Product();
  imagePath: string;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private productsCartsService: ProductsCartsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    let path: string[] = (<string>this.router.url).split('/');
    const id: number = +path[path.length - 1];

    this.productService.getProduct(id).subscribe(
      (product) => {
        this.product = product;
        this.imagePath = product.image;
      }
    );
  }

  onSubmit(): void {
    const userId: number = Number(Cookie.get('userId'));

    this.cartService.getCarts().subscribe(
      (carts) => {
        let currentCart: Cart;

        for (const cart of carts) {
          if (cart.userId === userId) {
            currentCart = cart;
          }
        }

        this.productsCartsService.saveProductToCart(
          this.product,
          currentCart
        ).subscribe();

        alert(`'${this.product.name}' Added to Cart`);
      }
    );
  }
}
