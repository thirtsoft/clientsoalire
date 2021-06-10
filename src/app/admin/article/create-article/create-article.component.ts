import { Component, OnInit, Inject } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ArticleService } from './../../../services/article.service';
import { ScategoryService } from './../../../services/scategory.service';
import { ScategoryDto } from './../../../models/scategory';
import { ArticleDto } from './../../../models/article';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  addEditArticleDTO: ArticleDto = new ArticleDto();
  deleteArticleDTO: ArticleDto;
  scategoryListDTO: ScategoryDto[];

  data;
  paramId :any = 0;
  Errors = {status:false, msg:''};
  mySubscription: any;

  constructor(private articleService: ArticleService,
              private scategorieService: ScategoryService,
              private router: Router,
              private toastr: ToastrService,
              public dialog: MatDialog,
              private actRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    console.log('Param--', this.paramId);
    if(this.paramId  && this.paramId  > 0){
      this.getArticleDTOById(this.paramId);
    }

    this.getListScategoryDTOs();

  }

  getListScategoryDTOs() {
    this.scategorieService.getScategoryDTOs().subscribe(
      (response: ScategoryDto[]) => {
        this.scategoryListDTO = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  getArticleDTOById(id: number) {
    console.log('getOne');
    this.articleService.getArticleDtoById(id).subscribe(
      (response: ArticleDto) => {
        console.log('data--', response);
        this.addEditArticleDTO = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  public onAddArticle() {
    this.articleService.addArticleDto(this.addEditArticleDTO).subscribe(
      (response: ArticleDto) => {
      //  this.dialogRef.close();
        this.toastr.success("Article Ajouté avec Succès");
        this.router.navigate(['/backend/admin/articles']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateArticle() {
    this.articleService.updateArticleDto(this.addEditArticleDTO.id, this.addEditArticleDTO).subscribe(
      (response: ArticleDto) => {
      //  this.dialogRef.close();
        this.toastr.warning("Article Update avec Succès");
        this.router.navigate(['/backend/admin/articles']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
