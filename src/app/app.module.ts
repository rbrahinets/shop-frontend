import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
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
import {ProductsRoutingModule} from './products/products-routing.module';
import {MainModule} from './main/main.module';
import {MainRoutingModule} from './main/main-routing.module';
import {CategoriesModule} from './categories/categories.module';
import {CategoriesRoutingModule} from './categories/categories-routing.module';

import {AppComponent} from './app.component';
import {CartComponent} from './cart/cart.component';
import {WalletComponent} from './wallet/wallet.component';

import {CartService} from './cart/shared/cart.service';
import {WalletService} from './wallet/shared/wallet.service';
import {ProductsCartsService} from './cart/shared/products-carts.service';
import {ProductsCategoryService} from './categories/shared/products-category.service';
import {UserService} from './users/shared/user.service';
import {UserRoleService} from './users/shared/user-role.service';

const shopRoutes: Routes = [
  {path: 'cart', component: CartComponent},
  {path: 'wallet', component: WalletComponent},
];

@NgModule({
  declarations: [
    AppComponent,
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
    ProductsRoutingModule,
    MainModule,
    MainRoutingModule,
    CategoriesModule,
    CategoriesRoutingModule,
  ],
  providers: [
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
