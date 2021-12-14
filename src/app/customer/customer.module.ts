import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination' ;


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { FaqComponent } from './faq/faq.component';
import { FeatureProductComponent } from './feature-product/feature-product.component';
import { FeatureComponent } from './feature/feature.component';
import { BrandCategoryComponent } from './brand-category/brand-category.component';
import { CategoryComponent } from './category/category.component';
import { DealWeekComponent } from './deal-week/deal-week.component';
import { InstagramComponent } from './instagram/instagram.component';
import { BlogComponent } from './blog/blog.component';
import { DelivreComponent } from './delivre/delivre.component';
import { PartnaireComponent } from './partnaire/partnaire.component';
import { SearchComponent } from './search/search.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { ReseauComponent } from './reseau/reseau.component';
import { ContactComponent } from './contact/contact.component';
import { CartContentComponent } from './cart-content/cart-content.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { AboutComponent } from './about/about.component';
import { SearchbyPriceComponent } from './searchby-price/searchby-price.component';
import { SearchInShopComponent } from './search-in-shop/search-in-shop.component';
import { SidebarSubcatComponent } from './sidebar-subcat/sidebar-subcat.component';
import { SidebarHomeComponent } from './sidebar-home/sidebar-home.component';


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
    WishListComponent,
    FaqComponent,
    FeatureProductComponent,
    FeatureComponent,
    BrandCategoryComponent,
    CategoryComponent,
    DealWeekComponent,
    InstagramComponent,
    BlogComponent,
    DelivreComponent,
    PartnaireComponent,
    SearchComponent,
    MainBodyComponent,
    ReseauComponent,
    ContactComponent,
    CartContentComponent,
    CartItemComponent,
    AboutComponent,
    SearchbyPriceComponent,
    SearchInShopComponent,
    SidebarSubcatComponent,
    SidebarHomeComponent
  ],

  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,

    MatExpansionModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  entryComponents: [

  ]
})
export class CustomerModule { }
