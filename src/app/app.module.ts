import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductListItemComponent} from './products/product-list-item/product-list-item.component';
import {ProductComponent} from './products/product/product.component';
import {CategoryListComponent} from './categories/category-list/category-list.component';
import {CategoryListItemComponent} from './categories/category-list-item/category-list-item.component';
import {CategoryComponent} from './categories/category/category.component';
import {ProfileComponent} from './profile/profile.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {MainComponent} from './main/main.component';
import {CartComponent} from './cart/cart.component';
import {WalletComponent} from './wallet/wallet.component';
import {ProductService} from './products/shared/product.service';
import {CategoryService} from './categories/shared/category.service';
import {CartService} from './cart/shared/cart.service';
import {WalletService} from './wallet/shared/wallet.service';
import {ProductsCartsService} from './cart/shared/products-carts.service';
import {ProductsCategoryService} from './categories/shared/products-category.service';
import {UserService} from './users/shared/user.service';
import {UserRoleService} from './users/shared/user-role.service';
import {ButtonModule} from './button/button.module';
import {SignInModule} from './sign-in/sign-in.module';
import {SignInRoutingModule} from './sign-in/sign-in-routing.module';

const shopRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: 'categories/:id', component: CategoryComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'cart', component: CartComponent},
  {path: 'wallet', component: WalletComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductComponent,
    CategoryListComponent,
    CategoryListItemComponent,
    CategoryComponent,
    ProfileComponent,
    SignUpComponent,
    MainComponent,
    CartComponent,
    WalletComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(shopRoutes, {enableTracing: true}),
    ButtonModule,
    SignInModule,
    SignInRoutingModule,
  ],
  providers: [
    ProductService,
    CategoryService,
    ProductsCategoryService,
    UserService,
    UserRoleService,
    CartService,
    ProductsCartsService,
    WalletService,
  ],
  bootstrap: [AppComponent,]
})
export class AppModule {
}
