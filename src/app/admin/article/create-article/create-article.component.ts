import { ArticleService } from './../../../services/article.service';
import { ScategoryService } from './../../../services/scategory.service';
import { Router } from '@angular/router';
import { Scategory } from './../../../models/scategory';
import { Article } from './../../../models/article';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  public editArticle: Article = new Article();
  public deleteArticle: Article;
  listScategorie: Scategory[];

  constructor(private articleService: ArticleService,
              private scategorieService: ScategoryService,
              private router: Router){}

  ngOnInit(): void {
    this.getListScategories();

  }

  getListScategories() {
    this.scategorieService.getScategories().subscribe(
      (response: Scategory[]) => {
        this.listScategorie = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onAddArticle() {
    this.articleService.addArticle(this.editArticle).subscribe(
      (response: Article) => {
       console.log("Add Article successfully");
        this.router.navigate(['/articles']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addEditArticle() {

  }


}
