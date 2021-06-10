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

  constructor(private http: HttpClient) {
  }

  public getScategories(): Observable<Scategory[]> {
    return this.http.get<Scategory[]>(`${this.apiServerUrl}/scategories/all`);
  }

  public getScategoryById(scategoryId: number): Observable<Scategory> {
    return this.http.get<Scategory>(`${this.apiServerUrl}/scategories/${scategoryId}`);
  }

  public addScategory(scategory: Scategory): Observable<Scategory> {
    return this.http.post<Scategory>(`${this.apiServerUrl}/scategories/create`, scategory);
  }

  public updateScategory(scategory: Scategory): Observable<Scategory> {
    return this.http.put<Scategory>(`${this.apiServerUrl}/scategories/create`, scategory);
  }

  public deleteScategory(scategoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/scategories/delete/${scategoryId}`);
  }

  /************************* ScategoryDTO ***********/
  public getScategoryDTOs(): Observable<ScategoryDto[]> {
    return this.http.get<ScategoryDto[]>(`${this.apiServerUrl}/scategories/all`);
  }

  public getScategoryDTOById(scategoryId: number): Observable<ScategoryDto> {
    return this.http.get<ScategoryDto>(`${this.apiServerUrl}/scategories/${scategoryId}`);
  }

  public addScategoryDTO(scategoryDTO: ScategoryDto): Observable<ScategoryDto> {
    return this.http.post<ScategoryDto>(`${this.apiServerUrl}/scategories/create`, scategoryDTO);
  }

  public updateScategoryDTO(scategoryId: number, scategoryDTO: ScategoryDto): Observable<ScategoryDto> {
    return this.http.put<ScategoryDto>(`${this.apiServerUrl}/scategories/update/${scategoryId}`, scategoryDTO);
  }

  public deleteScategoryDTO(scategoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/scategories/delete/${scategoryId}`);
  }

}
