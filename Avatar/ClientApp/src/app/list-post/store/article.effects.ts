import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppState } from '../../root-store';
import { ArticleService } from 'src/app/services/article.service';
import { Store, select } from '@ngrx/store';
import { RequestArticles, ArticleActionTypes, LoadArticles, DeleteArticles, DeleteArticlesSuccess, DeleteArticle, DeleteArticleSuccess, UpsertArticle, UpdateArticle, UpdateArticleSuccess, AddArticle, AddArticleSuccess } from './article.actions';
import { withLatestFrom, mergeMap, catchError, map, tap, switchMap } from 'rxjs/operators';
import { selectAllArticles } from './article.reducer';
import { throwError } from 'rxjs';
import { SnackbarOpen } from 'src/app/edit-post/store/actions';
import { MatSnackBarConfig } from '@angular/material';

@Injectable()
export class ArticleEffects {
  config: MatSnackBarConfig;

  constructor(private actions$: Actions, private service: ArticleService, private store: Store<AppState>) {
    this.config = new MatSnackBarConfig()
  }

  @Effect()
  loadArticles$ = this.actions$.pipe(
    ofType<RequestArticles>(ArticleActionTypes.RequestArticles),
    withLatestFrom(this.store.pipe(select(selectAllArticles))),
    mergeMap(() => this.service.getArticles()),
    map(articles => new LoadArticles({ articles })),
    catchError(this.handleError)
  )
  @Effect()
  createArticle$ = this.actions$.pipe(
    ofType<AddArticle>(ArticleActionTypes.AddArticle),
    switchMap(a => this.service.createArticle(a.payload.article)),
    map(b => new AddArticleSuccess())
  )
  @Effect()
  updateArticle$ = this.actions$.pipe(
    ofType<UpsertArticle>(ArticleActionTypes.UpsertArticle),
    switchMap(a => this.service.updateArticle(a.payload.article)),
    map(b => new UpdateArticleSuccess())
  )
  @Effect()
  updateArticleSuccess$ = this.actions$.pipe(
    ofType<UpdateArticleSuccess>(ArticleActionTypes.UpdateArticleSuccess),
    tap(() => {
      this.config.panelClass = 'success'
      console.log(this.config)
    }),
    map(() => new SnackbarOpen({
      message: 'Article Saved',
      action: 'Success',
      config: this.config
    }))
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
    switchMap(a => this.service.deleteArticles(a.payload.ids)),
    map(count => new DeleteArticlesSuccess()),
    catchError(this.handleError)
  )
  @Effect()
  deleteArticleSuccess$ = this.actions$.pipe(
    ofType<DeleteArticleSuccess>(ArticleActionTypes.DeleteArticle),
    tap(() => {
      this.config.panelClass = 'failure'
      console.log(this.config)
    }),
    map(() => new SnackbarOpen({
      message: 'Article Deleted',
      action: 'Success',
      config: this.config
    }))
  )
  @Effect()
  deleteArticlesSuccess = this.actions$.pipe(
    ofType<DeleteArticlesSuccess>(ArticleActionTypes.DeleteArticles),
    tap(() => {
      this.config.panelClass = 'failure'
      console.log(this.config)
    }),
    map(() => new SnackbarOpen({
      message: 'Articles Deleted',
      action: 'Success',
      config: this.config
    }))
  )
  private handleError(error: any) {
    console.error(error);
    return throwError(error)
  }

}
