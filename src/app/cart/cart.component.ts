import {Component, OnInit} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {Cart} from './shared/cart.model';
import {Product} from '../products/shared/product.model';
import {ProductsGroupsDto} from './shared/products-groups.dto';
import {CartService} from './shared/cart.service';
import {ProductsCartService} from './shared/products-cart.service';

@Component({
  selector: 'shop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart;
  groupsOfProducts: ProductsGroupsDto[];
  faTimes = faTimes;
  private productsInCart: Product[];

  constructor(
    private cartService: CartService,
    private productsCartsService: ProductsCartService
  ) {
    this.cart = new Cart();
    this.groupsOfProducts = [];
    this.productsInCart = [];
  }

  ngOnInit(): void {
    this.setCart();
  }

  deleteProductFromCart(productName: string): void {
    for (const product of this.productsInCart) {
      if (product.name === productName) {
        this.productsCartsService.deleteProductFromCart(product, this.cart);
        this.updatePriceInCart(product);
        break;
      }
    }

    this.deleteProductFromGroup(productName);
  }

  private setCart(): void {
    this.cartService.findAll().subscribe(
      (carts: Cart[]) => {
        this.cart = CartService.getCartForCurrentUser(carts);

        if (this.resetCart()) {
          return;
        }

        this.groupProductsInCart().then();
      }
    );
  }

  private resetCart(): boolean {
    if (this.productsCartsService.getProductsInCart(this.cart).length > 0) {
      return false;
    }

    this.cart.totalCost = 0;
    this.cartService.update(this.cart).subscribe();
    return true;
  }

  private async groupProductsInCart() {
    this.productsInCart = await this.getProductsFromCart();
    for (const product of this.productsInCart) {
      this.addProductToGroup(product);
    }
  }

  private async getProductsFromCart(): Promise<Product[]> {
    return await this.productsCartsService.getProductsFromCart(this.cart);
  }

  private addProductToGroup(product: Product): void {
    for (const group of this.groupsOfProducts) {
      if (group.product === product.name) {
        group.number += 1;
        return;
      }
    }

    this.addProductToNewGroup(product);
  }

  private addProductToNewGroup(product: Product): void {
    const group = new ProductsGroupsDto(
      product.name,
      1
    );

    this.groupsOfProducts.push(group);
  }

  private updatePriceInCart(product: Product): void {
    this.cart.totalCost -= product.price;
    this.cartService.update(this.cart).subscribe();
  }

  private deleteProductFromGroup(productName: string): void {
    for (const group of this.groupsOfProducts) {
      if (group.product === productName) {
        group.number -= 1;

        if (group.number === 0) {
          this.deleteEmptyGroupOfProducts(group);
        }
      }
    }
  }

  private deleteEmptyGroupOfProducts(group: ProductsGroupsDto): void {
    if (this.getIndexOfGroup(group) > -1) {
      this.groupsOfProducts.splice(this.getIndexOfGroup(group), 1);
    }
  }

  private getIndexOfGroup(group: ProductsGroupsDto): number {
    return this.groupsOfProducts.indexOf(group, 0);
  }
}
