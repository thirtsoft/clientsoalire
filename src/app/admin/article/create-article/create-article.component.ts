import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(private articleService: ArticleService,
              private scategorieService: ScategoryService,
              private router: Router,
              private toastr: ToastrService,
              @Inject(MAT_DIALOG_DATA)  public data,
              public dialogRef:MatDialogRef<CreateArticleComponent>
  ){}

  ngOnInit(): void {
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

  public onAddArticle() {
    this.articleService.addArticleDto(this.addEditArticleDTO).subscribe(
      (response: ArticleDto) => {
        this.dialogRef.close();
        this.toastr.success("Article Ajouté avec Succès");
        this.router.navigate(['/backend/admin/articles']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addEditArticle() {

  }

}
