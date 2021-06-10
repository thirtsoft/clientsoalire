import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import  axios  from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  cart:any;
  products: any;
  constructor(private dataService: DataService,
              private router: Router,
  //            private productService:ProductService,
  ){ }

  ngOnInit(): void {
    this.dataService.currentCart.subscribe(editCart => (this.cart = editCart));

    // get from data using axios
      this.getProducts();
  }

  async getProducts() {
    try {
      const response = await  axios.get('assets/data/products.json');
      console.log("response data", response.data);
      console.log("response status", response.status);

      this.products = response.data;

    } catch (e) {
      console.log(e);
    }

  }

  add2cat(qty,product) {
    //  let tmpCart = {cart: this.cart.cart + item, products: []};
      this.cart.products.push(product);
      this.cart.cart = this.cart.cart + qty;
   //   this.cart++;
      this.dataService.updateCart(this.cart);
  
      console.log("this.cart--", this.cart);
  }
  
  bynow() {
    this.router.navigate(["cart"]);
  }


}
