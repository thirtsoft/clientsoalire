import { HttpClient } from '@angular/common/http';
import { AddressClient } from './../models/address-client';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressClientService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAddressClients(): Observable<AddressClient[]> {
    return this.http.get<AddressClient[]>(`${this.apiServerUrl}/addresseclients/all`);
  }

  public getAddressClientById(addressClientId: number): Observable<AddressClient> {
    return this.http.get<AddressClient>(`${this.apiServerUrl}/addresseclients/${addressClientId}`);
  }

  public addAddressClient(addressClient: AddressClient): Observable<AddressClient> {
    return this.http.post<AddressClient>(`${this.apiServerUrl}/addresseclients/create`, addressClient);
  }

  public updateAddressClient(addressClient: AddressClient): Observable<AddressClient> {
    return this.http.put<AddressClient>(`${this.apiServerUrl}/addresseclients/create`, addressClient);
  }

  public deleteAddressClient(addressClientId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/addresseclients/delete/${addressClientId}`);
  }

}
