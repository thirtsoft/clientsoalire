import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './../../auth/auth.service';
import { TokenStorageService } from './../../auth/token-storage.service';
import { ToastrService } from 'ngx-toastr';

import { CartService } from './../../services/cart.service';
import { CatalogueService } from './../../services/catalogue.service';
import { CartItem } from './../../models/cart-item';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  shippingCost: number;

  currentTime: number = 0;
  isLoggedIn = false;
  username: string;

  private roles: string[];

  showAdminBoard = false;
  showUserBoard = false;
  showVendeurBoard = false;
  email: String;
  userId;
  photo;
  img: boolean;

  currentUser;

  constructor(public catalogueService: CatalogueService,
              public autService: AuthService,
              private cartService: CartService,
              private tokenService: TokenStorageService,
              private toastr: ToastrService,
              private route: ActivatedRoute,
              private router: Router,
  ) {}

  ngOnInit(): void {
    this.cartDetails();

    this.isLoggedIn = !!this.tokenService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showVendeurBoard = this.roles.includes("ROLE_VENDEUR");
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
      this.userId = user.id;
      this.photo = user.photo;

      this.currentUser = this.autService.getCurrentUser();

      console.log(this.autService.getCurrentUser());

      const loginUser = this.autService.getCurrentLogginUser();
      console.log("Current user " + loginUser);

    }

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

//    this.isLoggedIn = !!this.tokenService.getToken();

    if (this.isLoggedIn) {
  //    const user = this.tokenService.getUser();

      this.catalogueService.getUserId();

    //  this.username = user.username;

    }



  }

   // increment quantity
   inCrementQuantity(cartItem: CartItem) {
    console.log('increment quantity', cartItem);
    this.cartService.addTocart(cartItem);
    this.toastr.success('au panier avec succès','Article Ajoutée', {
      timeOut: 1500,
      positionClass: 'toast-top-right',
    });

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
