import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ScategoryService } from './../../services/scategory.service';

import { ScategoryDto } from './../../models/scategory';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  scategoryListDTOs: ScategoryDto[];

  constructor(private scatService: ScategoryService,

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

}
