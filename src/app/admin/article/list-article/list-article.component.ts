import { ArticleService } from './../../../services/article.service';
import { ScategoryService } from './../../../services/scategory.service';
import { Router } from '@angular/router';
import { Article } from './../../../models/article';
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
  editArticle: Article;
  deleteArticle: Article;

  listDataScategories: Scategory[];
  id : number;
  p : number=1;
  searchText;

  constructor(private articleService: ArticleService,
              private scategorieService: ScategoryService,
              private dialog:MatDialog,
              private router: Router){}

  ngOnInit(): void {
    this.getScategories();
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

  public getScategories(): void {
    this.scategorieService.getScategories().subscribe(
      (response: Scategory[]) => {
        this.listDataScategories = response;
        console.log(this.listDataScategories);
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
    this.articleService.deleteArticle(articleId).subscribe(
      (response: void) => {
        console.log(response);
        this.getArticles();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
