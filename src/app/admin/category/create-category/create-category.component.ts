import { Component, OnInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from './../../../services/category.service';
import { CategoryDto } from './../../../models/category';



@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  addEditCategoryData: CategoryDto = new CategoryDto();
  listData: CategoryDto[];
  addCategoryForm: NgForm;

  data;
  paramId :any = 0;
  Errors = {status:false, msg:''};
  mySubscription: any;

  constructor(private categoryService: CategoryService,
              private router: Router,
              private toastr: ToastrService,
              public dialog: MatDialog,
              private actRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    console.log('Param--', this.paramId);
    if(this.paramId  && this.paramId  > 0){
      this.getCategoryDTOById(this.paramId);
    }
  }

  getCategoryDTOById(id: number) {
    console.log('getOne');
    this.categoryService.getCategoryDtoById(id).subscribe(
      (response: CategoryDto) => {
        console.log('data--', response);
        this.addEditCategoryData = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  onAddCategory() {
    this.categoryService.addCategoryDto(this.addEditCategoryData).subscribe(
      (response: CategoryDto) => {
  //      this.dialogRef.close();
        console.log("Category Ajouté");
        this.toastr.success("Category Ajouté avec Succès");
        this.router.navigate(['/backend/admin/categories']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onUpdateCategory() {
    this.categoryService.updateCategoryDto(this.addEditCategoryData.id, this.addEditCategoryData).subscribe(
      (response: CategoryDto) => {
 //       this.dialogRef.close();
        console.log("Category Ajouté");
        this.toastr.warning("Category Update avec Succès");
        this.router.navigate(['/backend/admin/categories']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

 


}
