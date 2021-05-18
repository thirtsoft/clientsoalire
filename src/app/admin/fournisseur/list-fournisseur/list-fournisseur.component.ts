import { CreateFournisseurComponent } from './../create-fournisseur/create-fournisseur.component';
import { MatDialog } from '@angular/material/dialog';
import { FournisseurService } from './../../../services/fournisseur.service';
import { Router } from '@angular/router';
import { Fournisseur } from './../../../models/fournisseur';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.scss']
})
export class ListFournisseurComponent implements OnInit {

  fournisseurList: Fournisseur[];
  editFournisseur: Fournisseur;
  deleteFournisseur: Fournisseur;

  id : number;
  p : number=1;
  searchText;


  constructor(private fourService: FournisseurService,
              private dialog: MatDialog,
              private router: Router){}

  ngOnInit(): void {
    this.getListFournisseurs();
  }

  public getListFournisseurs(): void {
    this.fourService.getFournisseurs().subscribe(
      (response: Fournisseur[]) => {
        this.fournisseurList = response;
        console.log(this.fournisseurList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onAddFournisseur() {
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
        this.fournisseurList.push(result);
      }
      // this.refreshData();
    });
  }


  addEditFournisseur(i) {

  }
  public onDeleteFournisseur(fourId: number): void {
    this.fourService.deleteFournisseur(fourId).subscribe(
      (response: void) => {
        console.log(response);
        this.getListFournisseurs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
