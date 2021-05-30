import { ScategoryService } from './../../../services/scategory.service';
import { CategoryService } from './../../../services/category.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryDto } from './../../../models/category';
import { HttpErrorResponse } from '@angular/common/http';
import { ScategoryDto } from './../../../models/scategory';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-create-scategory',
  templateUrl: './create-scategory.component.html',
  styleUrls: ['./create-scategory.component.scss']
})
export class CreateScategoryComponent implements OnInit {

  addEditScategoryDTO: ScategoryDto = new ScategoryDto();
  categoryListDTO: CategoryDto[];

  constructor(private scatService: ScategoryService,
              private catService: CategoryService,
              private toastr: ToastrService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA)  public data,
              public dialogRef:MatDialogRef<CreateScategoryComponent>,
  ){}

  ngOnInit(): void {
    this.getListCategoryDTOs();

  }

  getListCategoryDTOs() {
    this.catService.getCategoryDTOs().subscribe(
      (response: CategoryDto[]) => {
        this.categoryListDTO = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onAddScategory() {
    this.scatService.addScategoryDTO(this.addEditScategoryDTO).subscribe(
      (response: ScategoryDto) => {
        this.dialogRef.close();
        this.toastr.success("Scategory Ajouté avec Succès");
        this.router.navigate(['/backend/admin/scategories']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addEditScategory() {

  }
}
