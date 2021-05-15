import { Router } from '@angular/router';
import { CategoryService } from './../../../services/category.service';
import { Category } from './../../../models/category';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  public editCategory: Category = new Category();
  public deleteCategory: Category;

  constructor(private categoryService: CategoryService,
              private router: Router){}

  ngOnInit(): void {

  }

  public onAddCategory() {
    this.categoryService.addCategory(this.editCategory).subscribe(
      (response: Category) => {
       console.log("Add Categry successfully");
        this.router.navigate(['/categories']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addEditCategorie() {

  }


}
