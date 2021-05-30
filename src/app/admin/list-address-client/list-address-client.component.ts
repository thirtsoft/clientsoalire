import { ToastrService } from 'ngx-toastr';
import { DialogService } from './../../services/dialog.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddressClientService } from './../../services/address-client.service';
import { AddressClient, AddressClientDto } from './../../models/address-client';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-address-client',
  templateUrl: './list-address-client.component.html',
  styleUrls: ['./list-address-client.component.scss']
})
export class ListAddressClientComponent implements OnInit {

  addressClientDTOList: AddressClientDto[];
  deleteAddressClientDTO: AddressClientDto;

  id : number;
  p : number=1;
  searchText;

  constructor(private addClientService: AddressClientService,
              private router: Router,
               private dialog: MatDialog,
              public toastr: ToastrService,
              private dialogService: DialogService
  ){}

  ngOnInit(): void {
    this.getAddressClientDtos();
  }

  public getAddressClientDtos(): void {
    this.addClientService.getAddressClientDTOs().subscribe(
      (response: AddressClientDto[]) => {
        this.addressClientDTOList = response;
        console.log(this.addressClientDTOList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

   public onDeleteAddressClient(addClient: AddressClientDto): void{
    this.dialogService.openConfirmDialog('Etes-vous sur de vouloir Supprimer cet donnée ?')
    .afterClosed().subscribe((response: any) =>{
      if(response){
        this.addClientService.deleteAddressClientDto(addClient.id).subscribe(data => {
          this.toastr.warning('AddressClient supprimé avec succès!');
          this.addressClientDTOList = this.addressClientDTOList.filter(u => u !== addClient);
          this.getAddressClientDtos();
        });
      }
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

}
