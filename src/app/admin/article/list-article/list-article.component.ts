import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

import { ToastrService } from 'ngx-toastr';
import { DialogService } from './../../../services/dialog.service';
import { ArticleService } from './../../../services/article.service';
import { ArticleDto } from './../../../models/article';
import { CreateArticleComponent } from './../create-article/create-article.component';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit {

  articleDTOList: ArticleDto[];
  editArticle: ArticleDto;
  deleteArticle: ArticleDto;

  id : number;
  p : number=1;
  searchText;

  constructor(private articleService: ArticleService,
              private dialog: MatDialog,
              private router: Router,
              public toastr: ToastrService,
              private dialogService: DialogService
  ){}

  ngOnInit(): void {
    this.getListArticleDTOs();
  }

  public getListArticleDTOs(): void {
    this.articleService.getArticleDTOs().subscribe(
      (response: ArticleDto[]) => {
        this.articleDTOList = response;
        console.log(this.articleDTOList);
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
        this.articleDTOList.push(result);
      }
      // this.refreshData();
    });
  }

  addEditArticle(i) {

  }

   public onDeleteArticle(article: ArticleDto): void{
    this.dialogService.openConfirmDialog('Etes-vous sur de vouloir Supprimer cet donnée ?')
    .afterClosed().subscribe((response: any) =>{
      if(response){
        this.articleService.deleteArticleDto(article.id).subscribe(data => {
          this.toastr.warning('Article supprimé avec succès!');
          this.articleDTOList = this.articleDTOList.filter(u => u !== article);
          this.getListArticleDTOs();
        });
      }
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

}
