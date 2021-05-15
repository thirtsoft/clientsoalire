import { FournisseurService } from './../../../services/fournisseur.service';
import { ArticleService } from './../../../services/article.service';
import { Router } from '@angular/router';
import { Article } from './../../../models/article';
import { Fournisseur } from './../../../models/fournisseur';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-fournisseur',
  templateUrl: './create-fournisseur.component.html',
  styleUrls: ['./create-fournisseur.component.scss']
})
export class CreateFournisseurComponent implements OnInit {

  public formDataFournisseur: Fournisseur = new Fournisseur();
  public deleteFournisseur: Fournisseur;
  listArticleData: Article[];

  constructor(private fournisseurService: FournisseurService,
              private articleService: ArticleService,
              private router: Router){}

  ngOnInit(): void {
    this.getListArticles();

  }

  getListArticles() {
    this.articleService.getArticles().subscribe(
      (response: Article[]) => {
        this.listArticleData = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onAddFournisseur() {
    this.fournisseurService.addFournisseur(this.formDataFournisseur).subscribe(
      (response: Fournisseur) => {
       console.log("Add Fournisseur successfully");
        this.router.navigate(['/fournisseurs']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addEditArticle() {

  }

}
