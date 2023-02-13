import {Component, OnInit} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {Cart} from './shared/cart.model';
import {Product} from '../products/shared/product.model';
import {ProductsGroupsDto} from './shared/products-groups.dto';
import {CartService} from './shared/cart.service';
import {ProductsCartsService} from './shared/products-carts.service';

@Component({
  selector: 'shop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart;
  groupsOfProducts: ProductsGroupsDto[];
  faTimes = faTimes;

  constructor(
    private cartService: CartService,
    private productsCartsService: ProductsCartsService,
    private router: Router
  ) {
    this.cart = new Cart();
    this.groupsOfProducts = [];
  }

  ngOnInit(): void {
    this.setCart();
  }

  deleteProductFromCart(product: Product): void {
    this.productsCartsService
      .deleteProductFromCart(product, this.cart);
    this.cart.totalCost -= product.price;
    this.cartService.updateCart(this.cart).subscribe();
    this.router.navigate(['/cart'])
      .then(() => window.location.reload());
  }

  private setCart(): void {
    this.cartService.getCarts().subscribe(
      (carts: Cart[]) => {
        this.cart = CartService.getCartForCurrentUser(carts);
        this.groupProductsInCart(this.cart);
      }
    );
  }

  private groupProductsInCart(cart: Cart): void {
    for (const product of this.getProductsFromCart(cart)) {
      this.addProductToGroup(product);
    }
  }

  private getProductsFromCart(cart: Cart): Product[] {
    return this.productsCartsService.getProductsFromCart(cart.id);
  }

  private addProductToGroup(product: Product): void {
    for (const group of this.groupsOfProducts) {
      if (group.product === product.name) {
        group.number += 1;
        group.price += product.price;
        return;
      }
    }

    this.addProductToNewGroup(product);
  }

  private addProductToNewGroup(product: Product) {
    const group = new ProductsGroupsDto(
      product.name,
      product.price,
      1
    );

    this.groupsOfProducts.push(group);
  }
}
