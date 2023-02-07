import {Component, OnInit} from '@angular/core';
import {Product} from '../shared/product.model';
import {ProductService} from '../shared/product.service';
import {ProductsCartsService} from '../../cart/shared/products-carts.service';
import {CartService} from '../../cart/shared/cart.service';
import {LoggedUserService} from '../../users/shared/logged-user.service';
import {NavigationService} from '../../shared/navigation.service';
import {Cart} from '../../cart/shared/cart.model';

@Component({
  selector: 'shop-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product = new Product();
  imagePath: string;
  logged: boolean;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private productsCartsService: ProductsCartsService,
    private navigationService: NavigationService
  ) {
  }

  ngOnInit(): void {
    this.checkLoggedUser();
    this.setProduct();
  }

  onAddToCart(): void {
    this.cartService.getCart(
      LoggedUserService.getUserId()
    ).subscribe(
      (cart: Cart) => {
        this.productsCartsService.saveProductToCart(
          this.product,
          cart
        ).subscribe();

        cart.totalCost += this.product.price;
        this.cartService.updateCart(cart).subscribe();

        alert(`'${this.product.name}' Added to Cart`);
      }
    );
  }

  private checkLoggedUser(): void {
    this.logged = LoggedUserService.getUserId() > 0;
  }

  private setProduct(): void {
    this.productService.getProduct(
      this.navigationService.getCurrentPathId()
    ).subscribe(
      (product) => {
        this.product = product;
        this.imagePath = product.image;
      }
    );
  }
}
