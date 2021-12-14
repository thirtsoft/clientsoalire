import { ToastrService } from 'ngx-toastr';
import { DialogService } from './../../services/dialog.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from './../../services/client.service';
import { Client, ClientDto } from './../../models/client';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  clientDTOList: ClientDto[];
  deleteClientDTO: ClientDto;

  id : number;
  p : number=1;
  searchText;

  constructor(private clientService: ClientService,
              private router: Router,
              private dialog: MatDialog,
              public toastr: ToastrService,
              private dialogService: DialogService
  ){}

  ngOnInit(): void {
    this.getListClientDtos();
  }

  getListClientDtos(): void {
    this.clientService.getClientDTOsOrderByIdDesc().subscribe(
      (response: ClientDto[]) => {
        this.clientDTOList = response;
        console.log(this.clientDTOList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

 /*  onDeleteClient(client: ClientDto): void{
    this.dialogService.openConfirmDialog('Etes-vous sur de vouloir Supprimer cet donnée ?')
    .afterClosed().subscribe((response: any) =>{
      if(response){
        this.clientService.deleteClientDto(client.id).subscribe(data => {
          this.toastr.warning('Client supprimé avec succès!');
          this.clientDTOList = this.clientDTOList.filter(u => u !== client);
          this.getListClientDtos();
        });
      }
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  } */

  onDeleteClient(client: ClientDto): void{

        this.clientService.deleteClientDto(client.id).subscribe(data => {
          this.toastr.warning('Client supprimé avec succès!');
          this.clientDTOList = this.clientDTOList.filter(u => u !== client);
          this.getListClientDtos();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }


}
