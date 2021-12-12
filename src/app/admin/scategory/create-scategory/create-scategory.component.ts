import { Component, OnInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ToastrService } from 'ngx-toastr';
import { ScategoryService } from './../../../services/scategory.service';
import { CategoryService } from './../../../services/category.service';
import { CategoryDto } from './../../../models/category';
import { ScategoryDto } from './../../../models/scategory';

@Component({
  selector: 'app-create-scategory',
  templateUrl: './create-scategory.component.html',
  styleUrls: ['./create-scategory.component.scss']
})
export class CreateScategoryComponent implements OnInit {

  addEditScategoryDTO: ScategoryDto = new ScategoryDto();
  categoryListDTO: CategoryDto[];

  paramId :any = 0;

  constructor(private scatService: ScategoryService,
              private catService: CategoryService,
              private toastr: ToastrService,
              public dialog: MatDialog,
              private router: Router,
              private actRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    console.log('Param--', this.paramId);
    if(this.paramId  && this.paramId  > 0){
      this.getScategoryDTOById(this.paramId);
    }

    this.getListCategoryDTOs();

  }

  getScategoryDTOById(id: number) {
    console.log('getOne');
    this.scatService.getScategoryDtoById(id).subscribe(
      (response: ScategoryDto) => {
        console.log('data--', response);
        this.addEditScategoryDTO = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

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
    this.scatService.addScategoryDto(this.addEditScategoryDTO).subscribe(
      (response: ScategoryDto) => {
    //    this.dialogRef.close();
        this.toastr.success("Scategory Ajouté avec Succès");
        this.router.navigate(['/backend/admin/scategories']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateScategory() {
    this.scatService.updateScategoryDto(this.addEditScategoryDTO.id, this.addEditScategoryDTO).subscribe(
      (response: ScategoryDto) => {
    //    this.dialogRef.close();
        this.toastr.warning("Scategory Update avec Succès");
        this.router.navigate(['/backend/admin/scategories']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
