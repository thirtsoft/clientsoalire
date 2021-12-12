import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CatalogueService } from './../../services/catalogue.service';
import { CartItem } from './../../models/cart-item';
import { Component, OnInit } from '@angular/core';

import { CartService } from './../../services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totalPrice: number = 0;
  totalQuantity: number = 0;

  products;
  cart;
  cartItem=[]; // for car list show

  cartItems: CartItem[] = [];
  shippingCost: number;

  currentTime: number = 0;
  isLoggedIn = false;
  username: string;

  constructor(public cartService: CartService,
              public catalogueService: CatalogueService,
          //    private tokenService: TokenStorageService,
              private toastr: ToastrService,
              private route: ActivatedRoute,
              private router: Router,
  ) {}

  ngOnInit(): void {
    this.updateCartStatus();

  }

  updateCartStatus() {
    this.cartService.totalQuantity.subscribe(
      data => {
        this.totalQuantity = data
      }
    )
    this.cartService.totalPrice.subscribe(
      data => {
        this.totalPrice = data
      }
    );

    this.cartDetails();

  }

  cartDetails() {
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    )

    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    this.shippingCost = this.cartService.shippingCost;

    this.cartService.calculateTotalPrice();

  //  this.isLoggedIn = !!this.tokenService.getToken();

    if (this.isLoggedIn) {

      this.catalogueService.getUserId();

    }



  }

   // decrement quantity
   decrementQuantity(cartItem: CartItem) {
    console.log('decrement', cartItem);
    this.cartService.decrementQuantity(cartItem);
  }

  removeCart(cartItem: CartItem) {
    this.cartService.remove(cartItem);
  }

  getTS() {
    return this.currentTime;
  }



}
