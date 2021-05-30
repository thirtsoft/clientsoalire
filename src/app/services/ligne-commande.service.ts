import { HttpClient } from '@angular/common/http';
import { LigneCommande, LigneCommandeDto } from './../models/ligne-commande';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getLigneCommandes(): Observable<LigneCommande[]> {
    return this.http.get<LigneCommande[]>(`${this.apiServerUrl}/ligneCommandes/all`);
  }

  public getLigneCommandeById(ligneCommandeId: number): Observable<LigneCommande> {
    return this.http.get<LigneCommande>(`${this.apiServerUrl}/ligneCommandes/${ligneCommandeId}`);
  }

  public addLigneCommande(ligneCommande: LigneCommande): Observable<LigneCommande> {
    return this.http.post<LigneCommande>(`${this.apiServerUrl}/ligneCommandes/create`, ligneCommande);
  }

  public updateLigneCommande(ligneCommande: LigneCommande): Observable<LigneCommande> {
    return this.http.put<LigneCommande>(`${this.apiServerUrl}/ligneCommandes/create`, ligneCommande);
  }

  public deleteLigneCommande(ligneCommandeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ligneCommandes/delete/${ligneCommandeId}`);
  }

  /************************ LigneCommandeDTO ***************/
  public getLigneCommandeDTOs(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/ligneCommandes/all`);
  }

  public getLigneCommandeDTOById(ligneCommandeId: number): Observable<LigneCommandeDto> {
    return this.http.get<LigneCommandeDto>(`${this.apiServerUrl}/ligneCommandes/${ligneCommandeId}`);
  }

  public addLigneCommandeDTO(ligneCommandeDTO: LigneCommandeDto): Observable<LigneCommandeDto> {
    return this.http.post<LigneCommandeDto>(`${this.apiServerUrl}/ligneCommandes/create`, ligneCommandeDTO);
  }

  public updateLigneCommandeDTO(ligneCommandeDTO: LigneCommandeDto): Observable<LigneCommandeDto> {
    return this.http.put<LigneCommandeDto>(`${this.apiServerUrl}/ligneCommandes/create`, ligneCommandeDTO);
  }

  public deleteLigneCommandeDTO(ligneCommandeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ligneCommandes/delete/${ligneCommandeId}`);
  }


}
