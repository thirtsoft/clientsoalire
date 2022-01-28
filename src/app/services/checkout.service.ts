import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { TokenStorageService } from './../auth/token-storage.service';
import { Purchase } from './../models/purchase';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private apiServerUrl = environment.apiBaseUrl;

  id;

  constructor(private http: HttpClient,
              private tokenService: TokenStorageService
  ) {
  }

  placeOrder(purchase: Purchase): Observable<any> {
    return this.http.post<GetResponsePurchase>(`${this.apiServerUrl}/checkout/purchase`, purchase);
    // .pipe(
    //   map(response=> response.orderTrackingNumber) checkout/purchase
    // )
  }

  placeToOrder(purchase: Purchase): Observable<any> {
    return this.http.post<GetResponsePurchase>(`${this.apiServerUrl}/checkout/placeToOrder`, purchase);
  }

  placeToOrderWithUser(purchase: Purchase, id: number): Observable<any> {
    return this.http.post<GetResponsePurchase>(`${this.apiServerUrl}/checkout/placeToOrderWithUser?id=`+id, purchase);
  }


  place2Order(purchase: Purchase, id: number): Observable<any> {
    return this.http.post<GetResponsePurchase>(`${this.apiServerUrl}/checkout/placeToOrder?id=${id}`, purchase);

  }

  getUserId() {
    const user = this.tokenService.getUser();
    this.id = user.id
  }


}

interface GetResponsePurchase{
  orderTrackingNumber: string;
}

interface GetResponsePurchase{
  orderTrackingNumber: string;
}


