import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from './../../services/client.service';
import { Client } from './../../models/client';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  clientList: Client[];
  editClient: Client;
  deleteClient: Client;

  id : number;
  p : number=1;
  searchText;


  constructor(private cltService: ClientService,
              private dialog: MatDialog,
              private router: Router){}

  ngOnInit(): void {
    this.getListClients();
  }

  public getListClients(): void {
    this.cltService.getClients().subscribe(
      (response: Client[]) => {
        this.clientList = response;
        console.log(this.clientList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addEditClient(i) {

  }
  public onDeleteClient(cltId: number): void {
    this.cltService.deleteClient(cltId).subscribe(
      (response: void) => {
        console.log(response);
        this.getListClients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
