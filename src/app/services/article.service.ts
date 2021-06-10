import { HttpClient } from '@angular/common/http';
import { Article, ArticleDto } from './../models/article';
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

  /********************** ArticleDTO   *****************/

  public getArticleDTOs(): Observable<ArticleDto[]> {
    return this.http.get<ArticleDto[]>(`${this.apiServerUrl}/articles/all`);
  }

  public getArticleDtoById(articleId: number): Observable<ArticleDto> {
    return this.http.get<ArticleDto>(`${this.apiServerUrl}/articles/${articleId}`);
  }

  public getArticleDtoByReference(reference: string): Observable<ArticleDto> {
    return this.http.get<ArticleDto>(`${this.apiServerUrl}/articles/${reference}`);
  }

  public addArticleDto(articleDTO: ArticleDto): Observable<ArticleDto> {
    return this.http.post<ArticleDto>(`${this.apiServerUrl}/articles/create`, articleDTO);
  }

  public updateArticleDto(articleId: number, articleDTO: ArticleDto): Observable<ArticleDto> {
    return this.http.put<ArticleDto>(`${this.apiServerUrl}/articles/update/${articleId}`, articleDTO);
  }

  public deleteArticleDto(articleId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/articles/delete/${articleId}`);
  }


}
