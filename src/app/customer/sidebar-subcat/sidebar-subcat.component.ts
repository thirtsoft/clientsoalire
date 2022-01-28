import { CatalogueService } from './../../services/catalogue.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ScategoryService } from './../../services/scategory.service';
import { ScategoryDto } from './../../models/scategory';

@Component({
  selector: 'app-sidebar-subcat',
  templateUrl: './sidebar-subcat.component.html',
  styleUrls: ['./sidebar-subcat.component.scss']
})
export class SidebarSubcatComponent implements OnInit {

  scategoryListDTOs: ScategoryDto[];

  numberOfProduct;

  constructor(private scatService: ScategoryService,
              public catalogueService: CatalogueService
  ) {}

  ngOnInit(): void {
    this.getScategoryListDTOs();
  }
  public getScategoryListDTOs() {
    this.scatService.getScategoryDtos().subscribe(
      (response: ScategoryDto[]) => {
        this.scategoryListDTOs = response;
        console.log(this.scategoryListDTOs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  countNumberOfProductInsubCat() {
    this.catalogueService.countNumberOfProductInSubCategory(this.scategoryListDTOs[0].id)
      .subscribe(data=> {
        console.log(data);
        this.numberOfProduct = data;
      },err=> {
        console.log(err);
      });
  }

}
