import { Note } from './../models/note';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getNotifications(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.apiServerUrl}/notifications/all`);
  }

  public getNotificationById(notificationId: number): Observable<Note> {
    return this.http.get<Note>(`${this.apiServerUrl}/notifications/${notificationId}`);
  }

  public addNotification(notification: Note): Observable<Note> {
    return this.http.post<Note>(`${this.apiServerUrl}/notifications/create`, notification);
  }

  public updateNotification(notification: Note): Observable<Note> {
    return this.http.put<Note>(`${this.apiServerUrl}/notifications/create`, notification);
  }

  public deleteNotification(notificationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/notifications/delete/${notificationId}`);
  }

}
