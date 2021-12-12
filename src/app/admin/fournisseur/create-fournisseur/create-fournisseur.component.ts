import { Component, OnInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ToastrService } from 'ngx-toastr';
import { FournisseurService } from './../../../services/fournisseur.service';
import { ArticleService } from './../../../services/article.service';
import { ArticleDto } from './../../../models/article';
import { FournisseurDto } from './../../../models/fournisseur';


@Component({
  selector: 'app-create-fournisseur',
  templateUrl: './create-fournisseur.component.html',
  styleUrls: ['./create-fournisseur.component.scss']
})
export class CreateFournisseurComponent implements OnInit {

  formDataFournisseurDTO: FournisseurDto = new FournisseurDto();
  deleteFournisseurDTO: FournisseurDto;
  ListArticleDTO: ArticleDto[];

  data;
  paramId :any = 0;
  Errors = {status:false, msg:''};
  mySubscription: any;

  constructor(private fournisseurService: FournisseurService,
              private articleService: ArticleService,
              private router: Router,
              private toastr: ToastrService,
              public dialog: MatDialog,
              private actRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    console.log('Param--', this.paramId);
    if(this.paramId  && this.paramId  > 0){
      this.getFournisseurDTOById(this.paramId);
    }

    this.getListArticleDTOs();

  }

  getFournisseurDTOById(id: number) {
    console.log('getOne');
    this.fournisseurService.getFournisseurDtoById(id).subscribe(
      (response: FournisseurDto) => {
        console.log('data--', response);
        this.formDataFournisseurDTO = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  getListArticleDTOs(): void {
    this.articleService.getArticleDTOs().subscribe(
      (response: ArticleDto[]) => {
        this.ListArticleDTO = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  onAddFournisseur() {
    this.fournisseurService.addFournisseurDto(this.formDataFournisseurDTO).subscribe(
      (response: FournisseurDto) => {
    //    this.dialogRef.close();
        this.toastr.success("Fournisseur Ajouté avec Succès");
        this.router.navigate(['/backend/admin/fournisseurs']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onUpdateFournisseur() {
    this.fournisseurService.updateFournisseurDto(this.formDataFournisseurDTO.id, this.formDataFournisseurDTO).subscribe(
      (response: FournisseurDto) => {
    //    this.dialogRef.close();
        this.toastr.success("Fournisseur Modifié avec Succès");
        this.router.navigate(['/backend/admin/fournisseurs']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

 
}
