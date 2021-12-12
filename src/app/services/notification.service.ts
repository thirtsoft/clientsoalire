import { TokenStorageService } from './../auth/token-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ArticleService } from './article.service';
import { NotificationDto } from './../models/notification';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiServerUrl = environment.apiBaseUrl;

  id: any;
  artId: any;

  constructor(private http: HttpClient,
              private tokenService: TokenStorageService,
              private artService: ArticleService
  ) {
  }

  public getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.apiServerUrl}/notifications/all`);
  }

  public getNotificationById(notificationId: number): Observable<Notification> {
    return this.http.get<Notification>(`${this.apiServerUrl}/notifications/${notificationId}`);
  }

  public addNotification(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(`${this.apiServerUrl}/notifications/create`, notification);
  }

  public updateNotification(notification: Notification): Observable<Notification> {
    return this.http.put<Notification>(`${this.apiServerUrl}/notifications/create`, notification);
  }

  public deleteNotification(notificationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/notifications/delete/${notificationId}`);
  }

  /***************************** NotificationDTO */

  public getNotificationDtos(): Observable<NotificationDto[]> {
    return this.http.get<NotificationDto[]>(`${this.apiServerUrl}/notifications/all`);
  }

  public getAllNotificationDtosOrderByIdDesc(): Observable<NotificationDto[]> {
    return this.http.get<NotificationDto[]>(`${this.apiServerUrl}/notifications/searchAllNotificationsOrderByIdDesc`);
  }

  public getTop3RatingOrderByCreatedDateDesc(): Observable<NotificationDto[]> {
    return this.http.get<NotificationDto[]>(`${this.apiServerUrl}/notifications/searchTop3RatingOrderByCreatedDateDesc`);
  }

  public getTop4RatingOrderByCreatedDateDescByProduct(noteId: string): Observable<NotificationDto[]> {
    return this.http.get<NotificationDto[]>(`${this.apiServerUrl}/notifications/searchTop4RatingOrderByCreatedDateDescByProductId/${noteId}`);
  }

  public getNotificationDtoById(notificationId: number): Observable<NotificationDto> {
    return this.http.get<NotificationDto>(`${this.apiServerUrl}/notifications/findById/${notificationId}`);
  }

  public addNotificationDto(notificationDTO: NotificationDto): Observable<NotificationDto> {
    return this.http.post<NotificationDto>(`${this.apiServerUrl}/notifications/create`, notificationDTO);
  }

  public addRatingToArticle(notificationDTO: NotificationDto, reference: string, userId:number): Observable<NotificationDto> {
    return this.http.post<NotificationDto>(`${this.apiServerUrl}/notifications/createRatingToArticle?reference=${reference}&userId=${userId}`, notificationDTO);
  }

  public updateNotificationDto(notificationDTO: NotificationDto): Observable<NotificationDto> {
    return this.http.put<NotificationDto>(`${this.apiServerUrl}/notifications/create`, notificationDTO);
  }

  public deleteNotificationDto(notificationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/notifications/delete/${notificationId}`);
  }

  getUserId() {
    const user = this.tokenService.getUser();
    this.id = user.id
  }



}
