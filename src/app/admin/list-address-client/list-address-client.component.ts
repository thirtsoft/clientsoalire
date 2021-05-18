import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddressClientService } from './../../services/address-client.service';
import { AddressClient } from './../../models/address-client';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-address-client',
  templateUrl: './list-address-client.component.html',
  styleUrls: ['./list-address-client.component.scss']
})
export class ListAddressClientComponent implements OnInit {

  addressList: AddressClient[];
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

  addEditAddress(i) {

  }
  public onDeleteAddress(addId: number): void {
    this.addService.deleteAddressClient(addId).subscribe(
      (response: void) => {
        console.log(response);
        this.getListAddresses();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
