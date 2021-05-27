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

  commandeList: Commande[];
  commandeListDTO: CommandeDto[];
  editCommande: Commande;
  deleteCommande: Commande;

  id : number;
  p : number=1;
  searchText;


  constructor(private comService: CommandeService,
              private dialog: MatDialog,
              private router: Router){}

  ngOnInit(): void {
    this.getListCommandes();
    this.getListCommandeDTOs();
  }

  public getListCommandeDTOs() {
    this.comService.getCommandeDTOs().subscribe(
      (response: CommandeDto[]) => {
        this.commandeListDTO = response;
        console.log(this.commandeListDTO);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  public getListCommandes(): void {
    this.comService.getCommandes().subscribe(
      (response: Commande[]) => {
        this.commandeList = response;
        console.log(this.commandeList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addEditCommande(i) {

  }
  public onDeleteCommande(comId: number): void {
    this.comService.deleteCommandeDTO(comId).subscribe(
      (response: void) => {
        console.log(response);
        this.getListCommandeDTOs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
