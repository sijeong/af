import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { Article } from '../list-post/store/article.model';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  apiUrl = 'api/article';

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.baseUrl + this.apiUrl).pipe(
      tap(() => console.log('inside call')),
      catchError(this.handleError)
    )
  }
  
  getArticle(id: string): Observable<Article> {
    console.log(this.baseUrl + this.apiUrl + '/' + id);
    return this.http.get<any>(this.baseUrl + this.apiUrl + '/' + id).pipe(
      tap(() => console.log('inside call')),
      catchError(this.handleError)
    )
  }
  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.baseUrl + this.apiUrl + '/', article).pipe(

    );
  }
  updateArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.baseUrl + this.apiUrl + '/' + article.id, article).pipe(

    );
  }
  deleteArticle(id: number): Observable<number> {
    return this.http.delete<number>(this.baseUrl + this.apiUrl + '/d/' + id);
  }

  deleteArticles(ids: number[]): Observable<number[]> {
    console.log('delete called')
    ids.map(id => 'id')
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return this.http.post<number[]>(this.baseUrl + this.apiUrl + '/ds', JSON.stringify(ids), httpOptions).pipe(
      catchError(this.handleError)
    )
    
  }

  

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}
