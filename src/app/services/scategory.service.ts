import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Scategory, ScategoryDto } from './../models/scategory';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScategoryService {

  private apiServerUrl = environment.apiBaseUrl;

  choixmenu : string  = 'A';

  dataForm:  FormGroup;

  listData : ScategoryDto[];

  formData:  ScategoryDto;

  constructor(private http: HttpClient) {
  }

  /********************* ScategoryDTO ******************/

  public getScategoryDtos(): Observable<ScategoryDto[]> {
    return this.http.get<ScategoryDto[]>(`${this.apiServerUrl}/scategories/all`);
  }

  public getALLSuCategoryDtosOrderByIdDesc(): Observable<ScategoryDto[]> {
    return this.http.get<ScategoryDto[]>(`${this.apiServerUrl}/scategories/searchAllSubCategoryOrderByIdDesc`);
  }

  public getScategoryDtoById(scategoryId: number): Observable<ScategoryDto> {
    return this.http.get<ScategoryDto>(`${this.apiServerUrl}/scategories/${scategoryId}`);
  }

  public addScategoryDto(scategoryDTO: ScategoryDto): Observable<ScategoryDto> {
    return this.http.post<ScategoryDto>(`${this.apiServerUrl}/scategories/create`, scategoryDTO);
  }

  public updateScategoryDto(scategoryId: number, scategoryDTO: ScategoryDto): Observable<ScategoryDto> {
    return this.http.put<ScategoryDto>(`${this.apiServerUrl}/scategories/update/${scategoryId}`, scategoryDTO);
  }

  public deleteScategoryDto(scategoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/scategories/delete/${scategoryId}`);
  }



}
