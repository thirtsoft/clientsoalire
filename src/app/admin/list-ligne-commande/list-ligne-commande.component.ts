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

  public getLigneCommandeDtos(): void {
    this.lcomService.getLigneCommandeDTOs().subscribe(
      (response: LigneCommandeDto[]) => {
        this.ligneCommandeDTOList = response;
        console.log(this.ligneCommandeDTOList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteligneCommande(lcom: LigneCommandeDto): void{
    this.dialogService.openConfirmDialog('Etes-vous sur de vouloir Supprimer cet donnée ?')
    .afterClosed().subscribe((response: any) =>{
      if(response){
        this.lcomService.deleteLigneCommandeDTO(lcom.id).subscribe(data => {
          this.toastr.warning('LigneCommande supprimé avec succès!');
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
}
