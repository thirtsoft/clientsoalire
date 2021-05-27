import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddressLivraisonService } from './../../services/address-livraison.service';
import { AddressLivraison, AddressLivraisonDto } from './../../models/address-livraison';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-address-livraison',
  templateUrl: './list-address-livraison.component.html',
  styleUrls: ['./list-address-livraison.component.scss']
})
export class ListAddressLivraisonComponent implements OnInit {

  livraisonList: AddressLivraison[];
  livraisonListDTO: AddressLivraisonDto[];
  editAddressLivraison: AddressLivraison;
  deleteAddressLivraison: AddressLivraison;

  id : number;
  p : number=1;
  searchText;


  constructor(private livService: AddressLivraisonService,
              private dialog: MatDialog,
              private router: Router){}

  ngOnInit(): void {
    this.getListLivraisons();
    this.getListAddressLivraisonDTOs();
  }

  public getListAddressLivraisonDTOs() {
    this.livService.getAddressLivraisonDTOs().subscribe(
      (response: AddressLivraisonDto[]) => {
        this.livraisonListDTO = response;
        console.log(this.livraisonListDTO);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getListLivraisons(): void {
    this.livService.getAddressLivraisons().subscribe(
      (response: AddressLivraison[]) => {
        this.livraisonList = response;
        console.log(this.livraisonList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addEditLivraison(i) {

  }
  public onDeleteLivraison(cltId: number): void {
    this.livService.deleteAddressLivraisonDto(cltId).subscribe(
      (response: void) => {
        console.log(response);
        this.getListAddressLivraisonDTOs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
