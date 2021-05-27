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

  addressList: AddressClient[];
  addressClientListDTO: AddressClientDto[];
  editAddressClient: AddressClient;
  deleteAddressClient: AddressClient;

  id : number;
  p : number=1;
  searchText;


  constructor(private addService: AddressClientService,
              private dialog: MatDialog,
              private router: Router){}

  ngOnInit(): void {
    this.getListAddresses();
    this.getAddressClientDTOs();
  }

  public getAddressClientDTOs() {
    this.addService.getAddressClientDTOs().subscribe(
      (response: AddressClientDto[]) => {
        this.addressClientListDTO = response;
        console.log(this.addressClientListDTO);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getListAddresses(): void {
    this.addService.getAddressClients().subscribe(
      (response: AddressClient[]) => {
        this.addressList = response;
        console.log(this.addressList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addEditAddress(i) {}
  public onDeleteAddress(addId: number): void {
    this.addService.deleteAddressClientDto(addId).subscribe(
      (response: void) => {
        console.log(response);
        this.getAddressClientDTOs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
