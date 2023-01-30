import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {ButtonModule} from './button/button.module';
import {SignInModule} from './sign-in/sign-in.module';
import {SignInRoutingModule} from './sign-in/sign-in-routing.module';
import {SignUpModule} from './sign-up/sign-up.module';
import {SignUpRoutingModule} from './sign-up/sign-up-routing.module';
import {ProfileModule} from './profile/profile.module';
import {ProfileRoutingModule} from './profile/profile-routing.module';
import {HeaderModule} from './header/header.module';
import {FooterModule} from './footer/footer.module';
import {ProductsModule} from './products/products.module';
import {MainModule} from './main/main.module';

import {AppComponent} from './app.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductComponent} from './products/product/product.component';
import {CategoryListComponent} from './categories/category-list/category-list.component';
import {CategoryListItemComponent} from './categories/category-list-item/category-list-item.component';
import {CategoryComponent} from './categories/category/category.component';
import {MainComponent} from './main/main.component';
import {CartComponent} from './cart/cart.component';
import {WalletComponent} from './wallet/wallet.component';

import {CategoryService} from './categories/shared/category.service';
import {CartService} from './cart/shared/cart.service';
import {WalletService} from './wallet/shared/wallet.service';
import {ProductsCartsService} from './cart/shared/products-carts.service';
import {ProductsCategoryService} from './categories/shared/products-category.service';
import {UserService} from './users/shared/user.service';
import {UserRoleService} from './users/shared/user-role.service';

const shopRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: 'categories/:id', component: CategoryComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'cart', component: CartComponent},
  {path: 'wallet', component: WalletComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryListItemComponent,
    CategoryComponent,
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
    SignUpModule,
    SignUpRoutingModule,
    ProfileModule,
    ProfileRoutingModule,
    HeaderModule,
    FooterModule,
    ProductsModule,
    MainModule
  ],
  providers: [
    CategoryService,
    ProductsCategoryService,
    UserService,
    UserRoleService,
    CartService,
    ProductsCartsService,
    WalletService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
