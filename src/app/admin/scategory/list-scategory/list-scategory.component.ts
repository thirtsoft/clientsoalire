import { FormBuilder } from '@angular/forms';
import { DialogService } from './../../../services/dialog.service';
import { ToastrService } from 'ngx-toastr';
import { ScategoryService } from './../../../services/scategory.service';
import { CategoryService } from './../../../services/category.service';
import { Router } from '@angular/router';
import { ScategoryDto } from './../../../models/scategory';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-scategory',
  templateUrl: './list-scategory.component.html',
  styleUrls: ['./list-scategory.component.scss']
})
export class ListScategoryComponent implements OnInit {

  scategoryListDTO: ScategoryDto[];
  addEditscategoryDTO: ScategoryDto;
  deletescategoryDTO: ScategoryDto;

  id : number;
  p : number=1;
  searchText;

  constructor(private scategorieService: ScategoryService,
              private dialog: MatDialog,
              private router: Router,
              public toastr: ToastrService,
              private dialogService: DialogService,
              
  ){}

  ngOnInit(): void {
    this.getScategoryDTOs();
  }

  public getScategoryDTOs(): void {
    this.scategorieService.getALLSuCategoryDtosOrderByIdDesc().subscribe(
      (response: ScategoryDto[]) => {
        this.scategoryListDTO = response;
        console.log(this.scategoryListDTO);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onAddScategorie() {
    this.router.navigate(['/backend/admin/scategorie']);
  }
/*
  onAddScategorie() {
    this.openNoteDialog(null);
  }

  openNoteDialog(data?: any){
    const dialogRef = this.dialog.open(CreateScategoryComponent, {
      disableClose: true,
      autoFocus : true ,
      width : "50%",
      data: data
    } );

    dialogRef.afterClosed().subscribe(result => {
      if(result && data == null){
        this.scategoryListDTO.push(result);
      }
      
    });
  }

  addEditScategorie(item: ScategoryDto) {}
  */

/*   onDeleteScategorie(id: number): void{
    this.dialogService.openConfirmDialog('Etes-vous sur de vouloir Supprimer cet donnée ?')
    .afterClosed().subscribe((response: any) =>{
      if(response){
        this.scategorieService.deleteScategoryDto(id).subscribe(data => {
          this.toastr.warning('Scategory supprimé avec succès!');
          this.getScategoryDTOs();
        });
      }
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  } */

  onDeleteScategorie(id: number): void{
        this.scategorieService.deleteScategoryDto(id).subscribe(data => {
          this.toastr.warning('Scategory supprimé avec succès!');
          this.getScategoryDTOs();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }


}
