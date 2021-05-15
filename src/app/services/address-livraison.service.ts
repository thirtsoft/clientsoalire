import { HttpClient } from '@angular/common/http';
import { AddressLivraison } from './../models/address-livraison';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressLivraisonService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAddressLivraisons(): Observable<AddressLivraison[]> {
    return this.http.get<AddressLivraison[]>(`${this.apiServerUrl}/addresslivraisons/all`);
  }

  public getAddressLivraisonById(addressLivraisonId: number): Observable<AddressLivraison> {
    return this.http.get<AddressLivraison>(`${this.apiServerUrl}/addresslivraisons/${addressLivraisonId}`);
  }

  public addAddressLivraison(addressLivraison: AddressLivraison): Observable<AddressLivraison> {
    return this.http.post<AddressLivraison>(`${this.apiServerUrl}/addresslivraisons/create`, addressLivraison);
  }

  public updateAddressLivraison(addressLivraison: AddressLivraison): Observable<AddressLivraison> {
    return this.http.put<AddressLivraison>(`${this.apiServerUrl}/addresslivraisons/create`, addressLivraison);
  }

  public deleteAddressLivraison(addressLivraisonId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/addresslivraisons/delete/${addressLivraisonId}`);
  }

}
