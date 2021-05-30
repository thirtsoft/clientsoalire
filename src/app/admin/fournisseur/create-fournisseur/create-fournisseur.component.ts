import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FournisseurService } from './../../../services/fournisseur.service';
import { ArticleService } from './../../../services/article.service';
import { Router } from '@angular/router';
import { Article, ArticleDto } from './../../../models/article';
import { Fournisseur, FournisseurDto } from './../../../models/fournisseur';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-create-fournisseur',
  templateUrl: './create-fournisseur.component.html',
  styleUrls: ['./create-fournisseur.component.scss']
})
export class CreateFournisseurComponent implements OnInit {

  formDataFournisseurDTO: FournisseurDto = new FournisseurDto();
  deleteFournisseurDTO: FournisseurDto;
  ListArticleDTO: ArticleDto[];

  constructor(private fournisseurService: FournisseurService,
              private articleService: ArticleService,
              private router: Router,
              private toastr: ToastrService,
              @Inject(MAT_DIALOG_DATA)  public data,
              public dialogRef:MatDialogRef<CreateFournisseurComponent>
  ){}

  ngOnInit(): void {
    this.getListArticleDTOs();

  }

  public getListArticleDTOs(): void {
    this.articleService.getArticleDTOs().subscribe(
      (response: ArticleDto[]) => {
        this.ListArticleDTO = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onAddFournisseur() {
    this.fournisseurService.addFournisseurDTO(this.formDataFournisseurDTO).subscribe(
      (response: FournisseurDto) => {
        this.dialogRef.close();
        this.toastr.success("Fournisseur Ajouté avec Succès");
        this.router.navigate(['/backend/admin/fournisseurs']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addEditArticle() {

  }
}
