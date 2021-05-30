import { ToastrService } from 'ngx-toastr';
import { DialogService } from './../../services/dialog.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommandeService } from './../../services/commande.service';
import { Commande, CommandeDto } from './../../models/commande';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.scss']
})
export class ListCommandeComponent implements OnInit {

  commandeDTOList: CommandeDto[];
  deleteCommandeDTO: CommandeDto;

  id : number;
  p : number=1;
  searchText;

  constructor(private comService: CommandeService,
              private router: Router,
              private dialog: MatDialog,
              public toastr: ToastrService,
              private dialogService: DialogService
  ){}

  ngOnInit(): void {
    this.getListCommandeDtos();
  }

  public getListCommandeDtos(): void {
    this.comService.getCommandeDTOs().subscribe(
      (response: CommandeDto[]) => {
        this.commandeDTOList = response;
        console.log(this.commandeDTOList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCommande(com: CommandeDto): void{
    this.dialogService.openConfirmDialog('Etes-vous sur de vouloir Supprimer cet donnée ?')
    .afterClosed().subscribe((response: any) =>{
      if(response){
        this.comService.deleteCommandeDTO(com.id).subscribe(data => {
          this.toastr.warning('Commande supprimé avec succès!');
          this.commandeDTOList = this.commandeDTOList.filter(u => u !== com);
          this.getListCommandeDtos();
        });
      }
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

}
