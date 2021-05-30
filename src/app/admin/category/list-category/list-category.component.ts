import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DialogService } from './../../../services/dialog.service';
import { CategoryService } from './../../../services/category.service';
import { CategoryDto } from './../../../models/category';
import { CreateCategoryComponent } from './../create-category/create-category.component';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  categoryListDTO: CategoryDto[];
  categoryDTO : CategoryDto = new CategoryDto();

  id : number;
  p : number=1;
  searchText;

  constructor(private categoryService: CategoryService,
              private dialog: MatDialog,
              private router: Router,
              public toastr: ToastrService,
              private dialogService: DialogService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef:MatDialogRef<CreateCategoryComponent>,
  ){}

  ngOnInit(): void {
    this.getListCategoryDTOs();
  }

  public getListCategoryDTOs(): void {
    this.categoryService.getCategoryDTOs().subscribe(
      (response: CategoryDto[]) => {
        this.categoryListDTO = response;
        console.log(this.categoryListDTO);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onAddCategorie() {
    this.openNoteDialog(null);
  }

  openNoteDialog(data?: any){
    const dialogRef = this.dialog.open(CreateCategoryComponent, {
      disableClose: true,
      autoFocus : true ,
      width : "50%",
      data: data
    } );
    dialogRef.afterClosed().subscribe(result => {
      if(result && data == null){
        this.categoryListDTO.push(result);
      }
      // this.refreshData();
    });
  }

  addEditCategory(catId?: number) {
   /*  const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data = {
      catId
    };
    this.dialog.open(CreateCategoryComponent, dialogConfig); */

  }
  public onDeleteCategory(cat: CategoryDto): void{
    this.dialogService.openConfirmDialog('Etes-vous sur de vouloir Supprimer cet donnée ?')
    .afterClosed().subscribe((response: any) =>{
      if(response){
        this.categoryService.deleteCategoryDto(cat.id).subscribe(data => {
          this.toastr.warning('Category supprimé avec succès!');
          this.categoryListDTO = this.categoryListDTO.filter(u => u !== cat);
          this.getListCategoryDTOs();
        });
      }
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

}
