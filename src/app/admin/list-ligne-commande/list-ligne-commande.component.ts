import { LigneCommandeService } from './../../services/ligne-commande.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from './../../services/dialog.service';
import { LigneCommandeDto } from './../../models/ligne-commande';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-ligne-commande',
  templateUrl: './list-ligne-commande.component.html',
  styleUrls: ['./list-ligne-commande.component.scss']
})
export class ListLigneCommandeComponent implements OnInit {

  ligneCommandeDTOList: LigneCommandeDto[];
  deleteligneCommandeDTO: LigneCommandeDto;

  id : number;
  p : number=1;
  searchText;

  constructor(private lcomService: LigneCommandeService,
              private router: Router,
              private dialog: MatDialog,
              public toastr: ToastrService,
              private dialogService: DialogService
  ){}

  ngOnInit(): void {
    this.getLigneCommandeDtos();
  }

  getLigneCommandeDtos(): void {
    this.lcomService.getAllLigneCommandeDtosOrderByIdDesc().subscribe(
      (response: LigneCommandeDto[]) => {
        this.ligneCommandeDTOList = response;
        console.log(this.ligneCommandeDTOList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

 /*  onDeleteligneCommande(lcom: LigneCommandeDto): void{
    this.dialogService.openConfirmDialog('Etes-vous sur de vouloir Supprimer cet donnée ?')
    .afterClosed().subscribe((response: any) =>{
      if(response){
        this.lcomService.deleteLigneCommandeDto(lcom.id).subscribe(data => {
          this.toastr.error('avec succès','LigneCommande supprimé', {
            timeOut: 1500,
            positionClass: 'toast-top-right',
          });
          this.ligneCommandeDTOList = this.ligneCommandeDTOList.filter(u => u !== lcom);
          this.getLigneCommandeDtos();
        });
      }
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }
 */
  onDeleteligneCommande(lcom: LigneCommandeDto): void{
        this.lcomService.deleteLigneCommandeDto(lcom.id).subscribe(data => {
          this.toastr.error('avec succès','LigneCommande supprimé', {
            timeOut: 1500,
            positionClass: 'toast-top-right',
          });
          this.ligneCommandeDTOList = this.ligneCommandeDTOList.filter(u => u !== lcom);
          this.getLigneCommandeDtos();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

}
