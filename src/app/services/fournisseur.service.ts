import { HttpClient } from '@angular/common/http';
import { Fournisseur, FournisseurDto } from './../models/fournisseur';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getFournisseurs(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(`${this.apiServerUrl}/fournisseurs/all`);
  }

  public getFournisseurById(fournisseurId: number): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(`${this.apiServerUrl}/fournisseurs/${fournisseurId}`);
  }

  public addFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.post<Fournisseur>(`${this.apiServerUrl}/fournisseurs/create`, fournisseur);
  }

  public updateFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.put<Fournisseur>(`${this.apiServerUrl}/fournisseurs/create`, fournisseur);
  }

  public deleteFournisseur(fournisseurId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/fournisseurs/delete/${fournisseurId}`);
  }

  /************************** FournisseurDTO ************/
  public getFournisseurDTOs(): Observable<FournisseurDto[]> {
    return this.http.get<FournisseurDto[]>(`${this.apiServerUrl}/fournisseurs/all`);
  }

  public getFournisseurDTOById(fournisseurId: number): Observable<FournisseurDto> {
    return this.http.get<FournisseurDto>(`${this.apiServerUrl}/fournisseurs/${fournisseurId}`);
  }

  public addFournisseurDTO(fournisseurDTO: FournisseurDto): Observable<FournisseurDto> {
    return this.http.post<FournisseurDto>(`${this.apiServerUrl}/fournisseurs/create`, fournisseurDTO);
  }

  public updateFournisseurDTO(fournisseurDTO: FournisseurDto): Observable<FournisseurDto> {
    return this.http.put<FournisseurDto>(`${this.apiServerUrl}/fournisseurs/create`, fournisseurDTO);
  }

  public deleteFournisseurDTO(fournisseurId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/fournisseurs/delete/${fournisseurId}`);
  }


}
