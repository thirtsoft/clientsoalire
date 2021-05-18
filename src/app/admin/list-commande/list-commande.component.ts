import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommandeService } from './../../services/commande.service';
import { Commande } from './../../models/commande';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.scss']
})
export class ListCommandeComponent implements OnInit {

  commandeList: Commande[];
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
    this.comService.deleteCommande(comId).subscribe(
      (response: void) => {
        console.log(response);
        this.getListCommandes();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
