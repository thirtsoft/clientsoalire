import { ToastrService } from 'ngx-toastr';
import { DialogService } from './../../services/dialog.service';
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

  addressLivraisonDTOList: AddressLivraisonDto[];
  deleteAddressLivraisonDTO: AddressLivraisonDto;

  id : number;
  p : number=1;
  searchText;

  constructor(private addLivraisonService: AddressLivraisonService,
              private router: Router,
              private dialog: MatDialog,
              public toastr: ToastrService,
              private dialogService: DialogService
  ){}

  ngOnInit(): void {
    this.getAddressLivraisonDtos();
  }

  public getAddressLivraisonDtos(): void {
    this.addLivraisonService.getAddressLivraisonDTOs().subscribe(
      (response: AddressLivraisonDto[]) => {
        this.addressLivraisonDTOList = response;
        console.log(this.addressLivraisonDTOList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteAddressLivraison(livraison: AddressLivraisonDto): void{
    this.dialogService.openConfirmDialog('Etes-vous sur de vouloir Supprimer cet donnée ?')
    .afterClosed().subscribe((response: any) =>{
      if(response){
        this.addLivraisonService.deleteAddressLivraisonDto(livraison.id).subscribe(data => {
          this.toastr.warning('AddressLivraison supprimé avec succès!');
          this.addressLivraisonDTOList = this.addressLivraisonDTOList.filter(u => u !== livraison);
          this.getAddressLivraisonDtos();
        });
      }
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }
}
