import { ScategoryService } from './../../../services/scategory.service';
import { CategoryService } from './../../../services/category.service';
import { Router } from '@angular/router';
import { Category } from './../../../models/category';
import { Scategory } from './../../../models/scategory';
import { CreateScategoryComponent } from './../create-scategory/create-scategory.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-scategory',
  templateUrl: './list-scategory.component.html',
  styleUrls: ['./list-scategory.component.scss']
})
export class ListScategoryComponent implements OnInit {

  public scategories: Scategory[];
  public editScategory: Scategory;
  public deleteScategory: Scategory;

  listDataCategories: Category[];
  id : number;
  p : number=1;
  searchText;


  constructor(private scategorieService: ScategoryService,
              private categoryService: CategoryService,
              private dialog:MatDialog,
              private router: Router){}

  ngOnInit(): void {
    this.getlistCategories();
    this.getScategories();
  }

  public getlistCategories(): void {
    this.categoryService.getCategories().subscribe(
      (response: Category[]) => {
        this.listDataCategories = response;
     //   console.log(this.categories[0].idCategory);
        console.log(this.listDataCategories);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getScategories(): void {
    this.scategorieService.getScategories().subscribe(
      (response: Scategory[]) => {
        this.scategories = response;
        console.log(this.scategories);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

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
        this.scategories.push(result);
      }
      // this.refreshData();
    });
  }

  public onCreateScayegorie() {
    this.router.navigate(['/newScategorie']);
  }

  addEditScategorie(i) {

  }
  public onDeleteScategorie(scategorieId: number): void {
    this.scategorieService.deleteScategory(scategorieId).subscribe(
      (response: void) => {
        console.log(response);
        this.getScategories();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
