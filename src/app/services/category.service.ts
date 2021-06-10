import { Category, CategoryDto } from './../models/category';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiServerUrl}/categories/all`);
  }

  public getCategoryById(categoryId: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiServerUrl}/categories/${categoryId}`);
  }

  public getCategoryByDesignation(designation: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiServerUrl}/categories/${designation}`);
  }

  public addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.apiServerUrl}/categories/create`, category);
  }

  public updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiServerUrl}/categories/create`, category);
  }

  public deleteCategory(categoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/categories/delete/${categoryId}`);
  }

  /****************** CategoryDTO **********/
  public getCategoryDTOs(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(`${this.apiServerUrl}/categories/all`);
  }

  public getCategoryDTOById(categoryId: number): Observable<CategoryDto> {
    return this.http.get<CategoryDto>(`${this.apiServerUrl}/categories/${categoryId}`);
  }

  public getCategoryDTOByDesignation(designation: string): Observable<CategoryDto> {
    return this.http.get<CategoryDto>(`${this.apiServerUrl}/categories/${designation}`);
  }

  public addCategoryDTO(categoryDTO: CategoryDto): Observable<Category> {
    return this.http.post<CategoryDto>(`${this.apiServerUrl}/categories/create`, categoryDTO);
  }

  public updateCategoryDTO(categoryId: number, categoryDTO: CategoryDto): Observable<CategoryDto> {
    return this.http.put<CategoryDto>(`${this.apiServerUrl}/categories/update/${categoryId}`, categoryDTO);
  }

 
  public deleteCategoryDto(categoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/categories/delete/${categoryId}`);
  }

}
