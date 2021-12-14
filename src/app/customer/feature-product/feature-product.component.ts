import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../services/cart.service';
import { CartItem } from './../../models/cart-item';

import { CatalogueService } from './../../services/catalogue.service';
import { ArticleDto } from './../../models/article';

@Component({
  selector: 'app-feature-product',
  templateUrl: './feature-product.component.html',
  styleUrls: ['./feature-product.component.scss']
})
export class FeatureProductComponent implements OnInit {

  articleListDTOBySelected: ArticleDto[];

  currentTime: number = 0;

  searchMode: boolean = false;

  starRating = 0;

  currentRating = 4;

  constructor(private router: Router,
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

  buynow() {
    this.router.navigate(["cart"]);
  }

  recentClick(item) {
  }


}
