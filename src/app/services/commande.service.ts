import { HttpClient } from '@angular/common/http';
import { Commande, CommandeDto } from './../models/commande';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.apiServerUrl}/commandes/all`);
  }

  public getCommandeById(commandeId: number): Observable<Commande> {
    return this.http.get<Commande>(`${this.apiServerUrl}/commandes/${commandeId}`);
  }

  public addCommande(commande: Commande): Observable<Commande> {
    return this.http.post<Commande>(`${this.apiServerUrl}/commandes/create`, commande);
  }

  public updateCommande(commande: Commande): Observable<Commande> {
    return this.http.put<Commande>(`${this.apiServerUrl}/commandes/create`, commande);
  }

  public deleteCommande(commandeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/commandes/delete/${commandeId}`);
  }

  /********************* CommandeDTO *****************/
  public getCommandeDTOs(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/all`);
  }

  public getCommandeDTOById(commandeId: number): Observable<CommandeDto> {
    return this.http.get<CommandeDto>(`${this.apiServerUrl}/commandes/${commandeId}`);
  }

  public addCommandeDTO(commandeDTO: CommandeDto): Observable<CommandeDto> {
    return this.http.post<CommandeDto>(`${this.apiServerUrl}/commandes/create`, commandeDTO);
  }

  public updateCommandeDTO(commandeDTO: CommandeDto): Observable<CommandeDto> {
    return this.http.put<CommandeDto>(`${this.apiServerUrl}/commandes/create`, commandeDTO);
  }

  public deleteCommandeDTO(commandeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/commandes/delete/${commandeId}`);
  }


}
