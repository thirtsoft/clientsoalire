import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../services/cart.service';
import { CatalogueService } from './../../services/catalogue.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CartItem } from './../../models/cart-item';
import { ArticleDto } from './../../models/article';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import  axios  from 'axios';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-feature-product',
  templateUrl: './feature-product.component.html',
  styleUrls: ['./feature-product.component.scss']
})
export class FeatureProductComponent implements OnInit {

  cart:any;
  products: any;

  articleListDTOBySelected: ArticleDto[];

  currentTime: number = 0;

  searchMode: boolean = false;

  starRating = 0;

  currentRating = 4;

  constructor(private dataService: DataService,
              private router: Router,
              public catalogueService: CatalogueService,
              private cartService: CartService,
              private toastr: ToastrService,
              private activeRoute: ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
      this.getListArticleDTOs();
      }
    );

  }

  getListArticleDTOs() {
    this.searchMode = this.activeRoute.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      // do search work
      this.getArticleListDTOsBySearchKeyword();
    } else {
      //display product list
      this.getArticleListDTOsBySelectedIsTrue();
    }
  }

  public getArticleListDTOsBySelectedIsTrue() {
    this.catalogueService.getListArticleDTOBySelectedIsTrue().subscribe(
      (response: ArticleDto[]) => {
        this.articleListDTOBySelected = response;
        console.log(this.articleListDTOBySelected);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  getArticleListDTOsBySearchKeyword() {
    const keyword: string = this.activeRoute.snapshot.paramMap.get('keyword');
    this.catalogueService.getListArticleDTOByKeyword(keyword).subscribe(
      data  => {
        this.articleListDTOBySelected = data;
      }

    )

  }

  addTocart(articleDTO: ArticleDto) {
    console.log(`total designation: ${articleDTO.designation}, total price: ${articleDTO.price}`);
    const cartItem = new CartItem(articleDTO);
    this.cartService.addTocart(cartItem);
    this.toastr.success('au panier avec succès','Article Ajoutée', {
      timeOut: 1500,
      positionClass: 'toast-top-right',
    });

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

  add2cart(qty,product) {
  //  let tmpCart = {cart: this.cart.cart + item, products: []};
    this.cart.products.push(product);
    this.cart.cart = this.cart.cart + qty;
 //   this.cart++;
    this.dataService.updateCart(this.cart);

    console.log("this.cart--", this.cart);
  }

  add2cart2(qty,product) {
   //  let tmpCart = {cart: this.cart.cart + item, products: []};
      this.cart.products.push(product);
      this.cart.cart = this.cart.cart + qty;
 //   this.cart++;
      this.dataService.updateCart(this.cart);

      console.log("this.cart--", this.cart);
  }

  buynow() {
    this.router.navigate(["cart"]);
  }

  recentClick(item) {
  }


}
