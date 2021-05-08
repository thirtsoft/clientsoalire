import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { CustomerRoutingModule } from './customer-routing.module';
import { ListAddressComponent } from './address/list-address/list-address.component';
import { CustomerComponent } from './customer/customer.component';


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
    PageNotFoundComponent
  ],

  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
