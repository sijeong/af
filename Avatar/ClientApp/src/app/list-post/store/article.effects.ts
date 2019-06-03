import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppState } from '../../root-store';
import { ArticleService } from 'src/app/services/article.service';
import { Store, select } from '@ngrx/store';
import { RequestArticles, ArticleActionTypes, LoadArticles, DeleteArticles, DeleteArticlesSuccess, DeleteArticle, DeleteArticleSuccess, UpsertArticle, UpdateArticle, UpdateArticleSuccess } from './article.actions';
import { withLatestFrom, mergeMap, catchError, map, tap, switchMap } from 'rxjs/operators';
import { selectAllArticles } from './article.reducer';
import { throwError } from 'rxjs';

@Injectable()
export class ArticleEffects {

  private handleError(error: any) {
    console.error(error);
    return throwError(error)
  }

  constructor(private actions$: Actions, private service: ArticleService, private store: Store<AppState>) { }

  @Effect()
  loadArticles$ = this.actions$.pipe(
    ofType<RequestArticles>(ArticleActionTypes.RequestArticles),
    withLatestFrom(this.store.pipe(select(selectAllArticles))),
    mergeMap(() => this.service.getArticles()),
    map(articles => new LoadArticles({ articles })),
    catchError(this.handleError)
  )
  @Effect()
  updateArticle$ = this.actions$.pipe(
    ofType<UpsertArticle>(ArticleActionTypes.UpsertArticle),
    switchMap(a => this.service.updateArticle(a.payload.article)),
    map(b => new UpdateArticleSuccess())
  )
  
  @Effect()
  deleteArticle$ = this.actions$.pipe(
    ofType<DeleteArticle>(ArticleActionTypes.DeleteArticle),
    switchMap(a => this.service.deleteArticle(a.payload.id)),
    map(b => new DeleteArticleSuccess())
  )
  @Effect()
  deleteArticles$ = this.actions$.pipe(
    ofType<DeleteArticles>(ArticleActionTypes.DeleteArticles),
    switchMap(a => this.service.deleteArticles( a.payload.ids)),
    map(count => new DeleteArticlesSuccess()),
    catchError(this.handleError)
  )
}
