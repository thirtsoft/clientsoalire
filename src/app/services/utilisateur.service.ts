import { HttpClient } from '@angular/common/http';
import { Utilisateur, UtilisateurDto } from './../models/utilisateur';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.apiServerUrl}/utilisateurs/all`);
  }

  public getUtilisateurById(utilisateurId: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiServerUrl}/utilisateurs/${utilisateurId}`);
  }

  public addUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.apiServerUrl}/utilisateurs/create`, utilisateur);
  }

  public updateUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.apiServerUrl}/utilisateurs/create`, utilisateur);
  }

  public deleteUtilisateur(utilisateurId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/utilisateurs/delete/${utilisateurId}`);
  }

  /******************** UtilisateurDTO ***************/
  public getUtilisateurDTOs(): Observable<UtilisateurDto[]> {
    return this.http.get<UtilisateurDto[]>(`${this.apiServerUrl}/utilisateurs/all`);
  }

  public getUtilisateurDTOById(utilisateurId: number): Observable<UtilisateurDto> {
    return this.http.get<UtilisateurDto>(`${this.apiServerUrl}/utilisateurs/${utilisateurId}`);
  }

  public addUtilisateurDTO(utilisateurDTO: UtilisateurDto): Observable<UtilisateurDto> {
    return this.http.post<UtilisateurDto>(`${this.apiServerUrl}/utilisateurs/create`, utilisateurDTO);
  }

  public updateUtilisateurDTO(utilisateurDTO: UtilisateurDto): Observable<UtilisateurDto> {
    return this.http.put<UtilisateurDto>(`${this.apiServerUrl}/utilisateurs/create`, utilisateurDTO);
  }

  public deleteUtilisateurDTO(utilisateurId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/utilisateurs/delete/${utilisateurId}`);
  }


}
