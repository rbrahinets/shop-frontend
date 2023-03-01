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
import {AdminPanelModule} from './admin-panel/admin-panel.module';
import {SharedModule} from './shared/shared.module';
import {PageNotFoundModule} from './page-not-found/page-not-found.module';

import {MainRoutingModule} from './main/main-routing.module';
import {SignInRoutingModule} from './sign-in/sign-in-routing.module';
import {SignUpRoutingModule} from './sign-up/sign-up-routing.module';
import {CategoriesRoutingModule} from './categories/categories-routing.module';
import {ProductsRoutingModule} from './products/products-routing.module';
import {ProfileRoutingModule} from './profile/profile-routing.module';
import {CartRoutingModule} from './cart/cart-routing.module';
import {AdminPanelRoutingModule} from './admin-panel/admin-panel-routing.module';
import {UserRoutingModule} from './users/user-routing.module';
import {PageNotFoundRoutingModule} from './page-not-found/page-not-found-routing.module';

import {AppComponent} from './app.component';

@NgModule({
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
    AdminPanelModule,
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
    AdminPanelRoutingModule,
    UserRoutingModule,
    PageNotFoundRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
