import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {ButtonModule} from './button/button.module';
import {HeaderModule} from './header/header.module';
import {FooterModule} from './footer/footer.module';
import {MainModule} from './main/main.module';
import {SignInModule} from './sign-in/sign-in.module';
import {SignUpModule} from './sign-up/sign-up.module';
import {CategoriesModule} from './categories/categories.module';
import {ProductsModule} from './products/products.module';
import {SortModule} from './sort/sort.module';
import {ProfileModule} from './profile/profile.module';
import {CartModule} from './cart/cart.module';
import {StripePaymentModule} from './stripe-payment/stripe-payment.module';
import {UsersModule} from './users/users.module';
import {SharedModule} from './shared/shared.module';
import {PageNotFoundModule} from './page-not-found/page-not-found.module';

import {MainRoutingModule} from './main/main-routing.module';
import {SignInRoutingModule} from './sign-in/sign-in-routing.module';
import {SignUpRoutingModule} from './sign-up/sign-up-routing.module';
import {CategoriesRoutingModule} from './categories/categories-routing.module';
import {ProductsRoutingModule} from './products/products-routing.module';
import {ProfileRoutingModule} from './profile/profile-routing.module';
import {CartRoutingModule} from './cart/cart-routing.module';
import {PageNotFoundRoutingModule} from './page-not-found/page-not-found-routing.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    ButtonModule,
    HeaderModule,
    FooterModule,
    MainModule,
    SignInModule,
    SignUpModule,
    CategoriesModule,
    ProductsModule,
    SortModule,
    ProfileModule,
    CartModule,
    StripePaymentModule,
    UsersModule,
    SharedModule,
    PageNotFoundModule,
    MainRoutingModule,
    SignInRoutingModule,
    SignUpRoutingModule,
    CategoriesRoutingModule,
    ProductsRoutingModule,
    ProfileRoutingModule,
    CartRoutingModule,
    PageNotFoundRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
