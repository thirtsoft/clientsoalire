import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LigneCommandeDto } from './../models/ligne-commande';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CommandeDto } from './../models/commande';
import { ClientDto } from './../models/client';
import { NotificationDto } from './../models/notification';
import { FournisseurDto } from './../models/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public apiServerUrl = environment.apiBaseUrl;

  public apiBaseUrl: 'http://localhost:8081/casa-solaire/v1';

  constructor(private http: HttpClient
  ) {}

  public getTop200LigneCommandeOrderByIdDesc(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/lignecommandes/searchTopLigneCommandesOrderByIdDesc`);
  }

  public countNumberOfCommande(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/countNumberOfCommande`);
  }

  public countNumberOfOrdersInMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/countNumberOfOrdersInMonth`);
  }

  public countNumberOfOrdersByStatusPending(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/countNumberOfOrdersByPendingStatus`);
  }

  public countNumberOfCommandeByDay(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/numberOfCommandeByDay`);
  }

  public countNumberOfCommandeByMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/numberOfCommandeByMonth`);
  }

  public sumTotaleOfCommandeInDay(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/sumTotalOfCommandeByDay`);
  }

  public sumTotaleOfCommandeInMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/sumTotalOfCommandeByMonth`);
  }

  public sumTotaleOfCommandeInYear(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/sumTotalOfCommandeByYear`);
  }


  public SumTotaleOfCommandeByMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/sumTotaleOfCommandeByMonthByList`);
  }

  public SumTotaleOfOrdersByYear(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/commandes/sumTotaleOfCommandeByYearList`);
  }

  public countNumberOfClient(): Observable<ClientDto[]> {
    return this.http.get<ClientDto[]>(`${this.apiServerUrl}/clients/countNumberOfClient`);
  }

  public countNumberOfFournisseurs(): Observable<FournisseurDto[]> {
    return this.http.get<FournisseurDto[]>(`${this.apiServerUrl}/fournisseurs/countNumberOfFournisseurs`);
  }

  public countNumberOfNotification(): Observable<NotificationDto[]> {
    return this.http.get<NotificationDto[]>(`${this.apiServerUrl}/notifications/countNumberOfNotification`);
  }

  public countNumberOfNotificationByProductId(noteId: string): Observable<NotificationDto> {
    return this.http.get<NotificationDto>(`${this.apiServerUrl}/notifications/countNumberOfNotificationByProductId/${noteId}`);
  }


}
