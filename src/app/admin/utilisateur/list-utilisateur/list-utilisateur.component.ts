import { CreateUtilisateurComponent } from './../create-utilisateur/create-utilisateur.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UtilisateurService } from './../../../services/utilisateur.service';
import { Utilisateur, UtilisateurDto } from './../../../models/utilisateur';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.scss']
})
export class ListUtilisateurComponent implements OnInit {

  utilisateurList: Utilisateur[];
  utilisateurListDTO: UtilisateurDto[];
  editUtilisateur: Utilisateur;
  deleteUtilisateur: Utilisateur;

  id : number;
  p : number=1;
  searchText;


  constructor(private userService: UtilisateurService,
              private dialog:MatDialog,
              private router: Router){}

  ngOnInit(): void {
    this.getlistUtilisateurs();
    this.getListUtilisateurDTO();
  }

  public getListUtilisateurDTO() {
    this.userService.getUtilisateurDTOs().subscribe(
      (response: UtilisateurDto[]) => {
        this.utilisateurListDTO = response;
        console.log(this.utilisateurListDTO);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  public getlistUtilisateurs(): void {
    this.userService.getUtilisateurs().subscribe(
      (response: Utilisateur[]) => {
        this.utilisateurList = response;
        console.log(this.utilisateurList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  onAddUtilisateur() {
    this.openNoteDialog(null);
  }

  openNoteDialog(data?: any){
    const dialogRef = this.dialog.open(CreateUtilisateurComponent, {
      disableClose: true,
      autoFocus : true ,
      width : "50%",
      data: data
    } );

    dialogRef.afterClosed().subscribe(result => {
      if(result && data == null){
        this.utilisateurList.push(result);
      }
      // this.refreshData();
    });
  }


  addEditUtilisateur(i) {

  }
  public onDeleteUtilisateur(userId: number): void {
    this.userService.deleteUtilisateurDTO(userId).subscribe(
      (response: void) => {
        console.log(response);
        this.getListUtilisateurDTO();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
