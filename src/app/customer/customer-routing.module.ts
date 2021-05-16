import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayementComponent } from './payement/payement.component';
import { ListAddressComponent } from './address/list-address/list-address.component';
import { AddAdressComponent } from './address/add-adress/add-adress.component';
import { CustomerComponent } from './customer/customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddNoteComponent } from './notification/add-note/add-note.component';
import { ListNoteComponent } from './notification/list-note/list-note.component';
import { ResumeComponent } from './resume/resume.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import { HistoriqueCommandeComponent } from './commande/historique-commande/historique-commande.component';
import { AddCommandeComponent } from './commande/add-commande/add-commande.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'commande',
    component: AddCommandeComponent
  },
  {
    path: 'commandes',
    component: HistoriqueCommandeComponent
  },
  {
    path: 'billingAddress',
    component: BillingAddressComponent
  },
  {
    path: 'client',
    component: CustomerComponent
  },
  {
    path: 'address',
    component: ListAddressComponent
  },
  {
    path: 'newAddress',
    component: AddAdressComponent
  },
  {
    path: 'shippingAdress',
    component: ShippingAddressComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'payments',
    component: PayementComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'listNotifications',
    component: ListNoteComponent
  },
  {
    path: 'addNotification',
    component: AddNoteComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
