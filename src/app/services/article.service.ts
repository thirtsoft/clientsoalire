import { HttpClient } from '@angular/common/http';
import { Article } from './../models/article';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiServerUrl}/articles/all`);
  }

  public getArticleById(articleId: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiServerUrl}/articles/${articleId}`);
  }

  public getArticleByReference(reference: string): Observable<Article> {
    return this.http.get<Article>(`${this.apiServerUrl}/articles/${reference}`);
  }

  public addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(`${this.apiServerUrl}/articles/create`, article);
  }

  public updateArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(`${this.apiServerUrl}/articles/create`, article);
  }

  public deleteArticle(articleId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/articles/delete/${articleId}`);
  }

}
