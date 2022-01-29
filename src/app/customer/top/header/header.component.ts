import { CartService } from './../../../services/cart.service';
import { CatalogueService } from './../../../services/catalogue.service';
import { AuthService } from './../../../auth/auth.service';
import { TokenStorageService } from './../../../auth/token-storage.service';
import { Router } from '@angular/router';
import { CartItem } from './../../../models/cart-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totalPrice: number = 0;
  totalQuantity: number = 0;

  cartItems: CartItem[] = [];
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

  constructor(public cartService: CartService,
              public catalogueService: CatalogueService,
              public autService: AuthService,
              private tokenService: TokenStorageService,
              private router: Router,
  ) {}

  ngOnInit(): void {
    this.updateCartStatus();

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

  logout() {
    this.tokenService.signOut();
    window.location.reload();
    this.router.navigateByUrl("");
  }

  getUserOrder() {
    this.router.navigate(['/my-account/' + this.userId]);
  }

  getProfile() {
    this.router.navigate(['/home/profile/' + this.userId]);
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
