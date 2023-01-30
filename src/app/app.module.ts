import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

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
import {CartModule} from './cart/cart.module';
import {CartRoutingModule} from './cart/cart-routing.module';
import {WalletModule} from './wallet/wallet.module';

import {AppComponent} from './app.component';
import {WalletComponent} from './wallet/wallet.component';

import {UserService} from './users/shared/user.service';
import {UserRoleService} from './users/shared/user-role.service';

const shopRoutes: Routes = [
  {path: 'wallet', component: WalletComponent},
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
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
    CartModule,
    CartRoutingModule,
    WalletModule
  ],
  providers: [
    UserService,
    UserRoleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
