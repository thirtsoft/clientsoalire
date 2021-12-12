import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, NgForm, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenStorageService } from './../../../auth/token-storage.service';

import { NotificationService } from './../../../services/notification.service';
import { NotificationDto } from './../../../models/notification';

import { CatalogueService } from './../../../services/catalogue.service';

import { ArticleService } from './../../../services/article.service';
import { ArticleDto } from './../../../models/article';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  addNotificationDTO = new NotificationDto();
  addRatingForm: NgForm;
  userId: any;
  ref: string;
  formData:  FormGroup;
  articleDTOs: ArticleDto = new ArticleDto();
  currentRating: number = 0;
  maxRatingValue = 5;
  isLoggedIn = false;
  username: string;

  constructor(private ratingService: NotificationService,
              private artService: ArticleService,
              private tokenService: TokenStorageService,
              public fb: FormBuilder,
              private actRoute: ActivatedRoute
  ) { }

  get f() { return this.formData.controls; }


  ngOnInit(): void {

    this.infoForm();

    this.getSingleArticleDTO();


    this.isLoggedIn = !!this.tokenService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();

    //  this.ratingService.getUserId();

      this.username = user.username;

    }


  }

  infoForm() {
    this.formData = this.fb.group({
      nbreEtoile: [this.currentRating, Validators.required],
      observation: ['', Validators.required],
    });

  }

  onRateChange(event :number) {
    console.log("The selected rate change ", event);
    this.currentRating = event;
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

  onSubmit() {
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


}
