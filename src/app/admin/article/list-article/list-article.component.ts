import { ArticleService } from './../../../services/article.service';
import { ScategoryService } from './../../../services/scategory.service';
import { Router } from '@angular/router';
import { Article, ArticleDto } from './../../../models/article';
import { Scategory } from './../../../models/scategory';
import { CreateArticleComponent } from './../create-article/create-article.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit {

  articles: Article[];
  articleListDTO: ArticleDto[];
  editArticle: Article;
  deleteArticle: Article;

  id : number;
  p : number=1;
  searchText;

  constructor(private articleService: ArticleService,
              private dialog: MatDialog,
              private router: Router){}

  ngOnInit(): void {
    this.getListArticleDTOs();
    this.getArticles();
  }

  public getArticles(): void {
    this.articleService.getArticles().subscribe(
      (response: Article[]) => {
        this.articles = response;
        console.log(this.articles);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getListArticleDTOs(): void {
    this.articleService.getArticleDTOs().subscribe(
      (response: ArticleDto[]) => {
        this.articleListDTO = response;
        console.log(this.articleListDTO);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onAddArticle() {
    this.openNoteDialog(null);
  }
  openNoteDialog(data?: any){
    const dialogRef = this.dialog.open(CreateArticleComponent, {
      disableClose: true,
      autoFocus : true ,
      width : "50%",
      data: data
    } );

    dialogRef.afterClosed().subscribe(result => {
      if(result && data == null){
        this.articles.push(result);
      }
      // this.refreshData();
    });
  }

  public onCreateArticle() {
    this.router.navigate(['/newArticle']);
  }

  addEditArticle(i) {

  }
  public onDeleteArticle(articleId: number): void {
    this.articleService.deleteArticleDto(articleId).subscribe(
      (response: void) => {
        console.log(response);
        this.getListArticleDTOs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
