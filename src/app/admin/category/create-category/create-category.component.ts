import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, NgForm } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from './../../../services/category.service';
import { Category, CategoryDto } from './../../../models/category';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  addEditCategoryData: CategoryDto = new CategoryDto();
  deleteCategory: Category;
  listData: CategoryDto[];
  addCategoryForm: NgForm;

  constructor(private categoryService: CategoryService,
              private router: Router,
              private toastr: ToastrService,
              public fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA)  public data,
              public dialogRef:MatDialogRef<CreateCategoryComponent>
  ){}

  ngOnInit(): void {
   /*  if (!isNullOrUndefined(this.data.catId)) {
      console.log(this.listData[this.data.catId]);
      this.addEditCategoryData = Object.assign({},this.listData[this.data.catId])
    } */
  }
  /*
  onSubmit() {
    if (isNullOrUndefined(this.data.catId)) {
      this.categoryService.addCategoryDTO(this.addEditCategoryData).subscribe(
        (response: CategoryDto) => {
          this.dialogRef.close();
          console.log("Category Ajouté");
          this.toastr.success("Category Ajouté avec Succès");
          this.router.navigate(['/backend/admin/categories']);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );

    }else {
      console.log(this.addEditCategoryData.id, this.addEditCategoryData);
      this.categoryService.updateCategoryDTO(this.addEditCategoryData).subscribe(
        (data: CategoryDto) => {
          this.dialogRef.close();
          this.dialogRef.close();
          console.log("Modifiée Ajouté");
          this.toastr.success("Category Modifiée avec Succès");
          this.router.navigate(['/backend/admin/categories']);
        },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
    }

  }
*/
  onAddCategory() {
    this.categoryService.addCategoryDTO(this.addEditCategoryData).subscribe(
      (response: CategoryDto) => {
        this.dialogRef.close();
        console.log("Category Ajouté");
        this.toastr.success("Category Ajouté avec Succès");
        this.router.navigate(['/backend/admin/categories']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addEditCategorie() {

  }


}
