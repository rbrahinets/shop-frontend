import {Component, OnInit} from '@angular/core';
import {Product} from '../shared/product.model';
import {ProductService} from '../shared/product.service';
import {ProductsCartService} from '../../cart/shared/products-cart.service';
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
  logged: boolean;
  isUser: boolean;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private productsCartsService: ProductsCartService,
    private navigation: NavigationService
  ) {
  }

  ngOnInit(): void {
    this.checkLoggedUser();
    this.setProduct();
    this.isUser = LoggedUserService.getRoleOfUser() === 'ROLE_USER';
  }

  onAddToCart(): void {
    this.cartService.findAll().subscribe(
      (carts: Cart[]) => {
        if (!CartService.getCartForCurrentUser(carts)) {
          return;
        }

        this.addProductToCart(CartService.getCartForCurrentUser(carts));
        this.updateTotalPriceInCart(CartService.getCartForCurrentUser(carts));

        alert(`'${this.product.name}' Added to Cart`);
      }
    );
  }

  onEdit(): void {
    this.navigation.goToEndpoint(`/products/${this.navigation.getCurrentPathId()}/edit`);
  }

  private checkLoggedUser(): void {
    this.logged = LoggedUserService.getUserId() > 0;
  }

  private setProduct(): void {
    this.productService.findAll().subscribe(
      (products: Product[]) => {
        if (!this.isCorrectProductId(products)) {
          return;
        }

        this.productService.findById(
          this.navigation.getCurrentPathId()
        ).then(
          (product: Product) => this.product = product
        );
      }
    );
  }

  private isCorrectProductId(products: Product[]): boolean {
    if (!this.navigation.getCurrentPathId() || !this.isProductExisted(products)) {
      this.navigation.goToEndpoint('/page-not-found');
      return false;
    }

    return true;
  }

  private isProductExisted(products: Product[]): boolean {
    for (const product of products) {
      if (product.id === this.navigation.getCurrentPathId()) {
        return true;
      }
    }

    return false;
  }

  private addProductToCart(cart: Cart): void {
    this.productsCartsService.saveProductToCart(
      this.product,
      cart
    );
  }

  private updateTotalPriceInCart(cart: Cart): void {
    cart.priceAmount += this.product.price;
    this.cartService.update(cart).subscribe();
  }
}
