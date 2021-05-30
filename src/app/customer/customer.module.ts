import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from '../shared/shared.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddNoteComponent } from './notification/add-note/add-note.component';
import { ListNoteComponent } from './notification/list-note/list-note.component';
import { ResumeComponent } from './resume/resume.component';
import { PayementComponent } from './payement/payement.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { AddAdressComponent } from './address/add-adress/add-adress.component';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import { HistoriqueCommandeComponent } from './commande/historique-commande/historique-commande.component';
import { AddCommandeComponent } from './commande/add-commande/add-commande.component';
import { HomeComponent } from './home/home.component';
import { ListAddressComponent } from './address/list-address/list-address.component';
import { CustomerComponent } from './customer/customer.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { AccountOrderComponent } from './account-order/account-order.component';
import { WishListComponent } from './wish-list/wish-list.component';


@NgModule({
  declarations: [
    ListAddressComponent,
    CustomerComponent,
    HomeComponent,
    AddCommandeComponent,
    HistoriqueCommandeComponent,
    BillingAddressComponent,
    CustomerComponent,
    ListAddressComponent,
    AddAdressComponent,
    ShippingAddressComponent,
    CartComponent,
    CheckoutComponent,
    PayementComponent,
    ResumeComponent,
    ListNoteComponent,
    AddNoteComponent,
    PageNotFoundComponent,
    ShopListComponent,
    SingleProductComponent,
    AccountOrderComponent,
    WishListComponent
  ],

  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
  ]
})
export class CustomerModule { }
