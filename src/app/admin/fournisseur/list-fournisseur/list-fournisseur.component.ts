import { DialogService } from './../../../services/dialog.service';
import { ToastrService } from 'ngx-toastr';
import { CreateFournisseurComponent } from './../create-fournisseur/create-fournisseur.component';
import { MatDialog } from '@angular/material/dialog';
import { FournisseurService } from './../../../services/fournisseur.service';
import { Router } from '@angular/router';
import { Fournisseur, FournisseurDto } from './../../../models/fournisseur';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.scss']
})
export class ListFournisseurComponent implements OnInit {

  fournisseurDTOList: FournisseurDto[];
  deleteFournisseur: Fournisseur;

  id : number;
  p : number=1;
  searchText;

  fournisseurDTO : FournisseurDto = new FournisseurDto();

  constructor(private fournisseurService: FournisseurService,
              private dialog: MatDialog,
              private router: Router,
              public toastr: ToastrService,
              private dialogService: DialogService
  ){}

  ngOnInit(): void {
    this.getListFournisseurDTOs();
  }

  public getListFournisseurDTOs(): void {
    this.fournisseurService.getFournisseurDTOs().subscribe(
      (response: FournisseurDto[]) => {
        this.fournisseurDTOList = response;
        console.log(this.fournisseurDTOList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onCreateFournisseur() {
    this.openNoteDialog(null);
  }

  openNoteDialog(data?: any){
    const dialogRef = this.dialog.open(CreateFournisseurComponent, {
      disableClose: true,
      autoFocus : true ,
      width : "50%",
      data: data
    } );

    dialogRef.afterClosed().subscribe(result => {
      if(result && data == null){
        this.fournisseurDTOList.push(result);
      }
      // this.refreshData();
    });
  }


  addEditFournisseur(i) {

  }

  public onDeleteForunisseur(four: FournisseurDto): void{
    this.dialogService.openConfirmDialog('Etes-vous sur de vouloir Supprimer cet donnée ?')
    .afterClosed().subscribe((response: any) =>{
      if(response){
        this.fournisseurService.deleteFournisseurDTO(four.id).subscribe(data => {
          this.toastr.warning('Fournisseur supprimé avec succès!');
          this.fournisseurDTOList = this.fournisseurDTOList.filter(u => u !== four);
          this.getListFournisseurDTOs();
        });
      }
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }
}
