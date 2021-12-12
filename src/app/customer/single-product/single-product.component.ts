import { TokenStorageService } from './../../auth/token-storage.service';
import { Validators, FormBuilder, NgForm, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import { ArticleService } from './../../services/article.service';
import { ArticleDto } from './../../models/article';

import { DashboardService } from './../../services/dashboard.service';

import { CatalogueService } from './../../services/catalogue.service';

import { CartService } from './../../services/cart.service';
import { CartItem } from './../../models/cart-item';

import { NotificationService } from './../../services/notification.service';
import { NotificationDto } from './../../models/notification';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  articleDTOs: ArticleDto = new ArticleDto();
  notificationListDTO: NotificationDto[];

  numberOfRatingForProduct;
  ref: string;
  currentRating = 4;

  starRating = 0;

  maxRatingValue = 5;

  qtyDefault = 1;


  addNotificationDTO = new NotificationDto();
  addRatingForm: NgForm;
  userId: any;
  formData:  FormGroup;
  currentRatingArticle: number = 0;
  isLoggedIn = false;
  username: string;

  constructor(public artService: ArticleService,
              private cartService: CartService,
              private dashboardService: DashboardService,
              public catalogueService: CatalogueService,
              private ratingService: NotificationService,
              private toastr: ToastrService,
              private router: Router,
              private actRoute: ActivatedRoute,
              private tokenService: TokenStorageService,
              public fb: FormBuilder,
  ){}

  get f() { return this.formData.controls; }

  ngOnInit(): void {

    this.infoForm();

    this.actRoute.paramMap.subscribe(()=> {
      this.getSingleArticleDTO();
    });

    this.countNumberOfRatingForProduct();

    this.getListOfTop4RatingOrderByCreatedDateDescByPrpductId();

    this.isLoggedIn = !!this.tokenService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();

      this.ratingService.getUserId();

      this.username = user.username;

    }




  }


  infoForm() {
    this.formData = this.fb.group({
      nbreEtoile: [this.currentRating, Validators.required],
      observation: ['', Validators.required],
    });

  }

  public getSingleArticleDTO() {
    this.ref = this.actRoute.snapshot.paramMap.get('reference');
    this.artService.getArticleDtoByReference(this.ref).subscribe(
      response => {
        this.articleDTOs = response;
        console.log(this.articleDTOs);
        }
        ,(error: HttpErrorResponse) => {
      alert(error.message);
    });

  }

  countNumberOfRatingForProduct() {
    this.dashboardService.countNumberOfNotificationByProductId(this.ref)
      .subscribe(
        response => {
          this.numberOfRatingForProduct = response;
          console.log(this.numberOfRatingForProduct);
        }
        ,(error: HttpErrorResponse) => {
      alert(error.message);
    });

  }

  getListOfTop4RatingOrderByCreatedDateDescByPrpductId() {
    this.ratingService.getTop4RatingOrderByCreatedDateDescByProduct(this.ref)
      .subscribe(
      (response: NotificationDto[]) => {
        this.notificationListDTO = response;
        console.log(this.notificationListDTO);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  addTocart() {
    console.log(`total designation: ${this.articleDTOs.designation}, total price: ${this.articleDTOs.price}`);
    const cartItem = new CartItem(this.articleDTOs);
    this.cartService.addTocart(cartItem);
//    this.toastr.success('Article Ajoutée au panier avec succès');
    this.toastr.success('au panier avec succès','Article Ajoutée', {
      timeOut: 1500,
      positionClass: 'toast-top-right',
    });

 /*    this.toastrService.error('everything is broken', 'Major Error', {
      timeOut: 3000,
    }); */

  }

  onRateChange(event :number) {
    console.log("The selected rate change ", event);
    this.currentRating = event;
  }

  onaddRating() {
    console.log(this.formData.value);
    console.log(this.formData.value, this.ref, this.ratingService.id);
    this.ratingService.addRatingToArticle(this.formData.value, this.ref, this.ratingService.id)
      .subscribe(
      (response: NotificationDto) => {
        alert("Note Attribué avec succès");
        console.log('Response--', response);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    );

  }



  bynow() {
    this.router.navigate(['cart']);
  }

  minus() {
    this.qtyDefault = this.articleDTOs.quantite;
    if(this.qtyDefault > 1) {
      this.qtyDefault--;
      console.log('minus');
    }

  }

  plus() {
    this.qtyDefault++;
    console.log('plus');
  }



}
