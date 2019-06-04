import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Article } from './article.model';

export enum ArticleActionTypes {
  RequestArticles = '[Article] Request Articles',
  LoadArticles = '[Article] Load Articles',
  AddArticle = '[Article] Add Article',
  AddArticleSuccess = '[Article] Add Article Success',
  UpsertArticle = '[Article] Upsert Article',
  AddArticles = '[Article] Add Articles',
  UpsertArticles = '[Article] Upsert Articles',
  UpdateArticle = '[Article] Update Article',
  UpdateArticleSuccess = '[Article] Update Article Success',
  UpdateArticles = '[Article] Update Articles',
  DeleteArticle = '[Article] Delete Article',
  DeleteArticleSuccess = '[Article] Delete Article Success',
  DeleteArticles = '[Article] Delete Articles',
  DeleteArticlesSuccess = '[Article] Delete Articles Success',
  ClearArticles = '[Article] Clear Articles'
}

export class RequestArticles implements Action {
  readonly type = ArticleActionTypes.RequestArticles;
}
export class LoadArticles implements Action {
  readonly type = ArticleActionTypes.LoadArticles;

  constructor(public payload: { articles: Article[] }) { }
}

export class AddArticle implements Action {
  readonly type = ArticleActionTypes.AddArticle;

  constructor(public payload: { article: Article }) { }
}
export class AddArticleSuccess implements Action {
  readonly type = ArticleActionTypes.AddArticleSuccess;

  // constructor(public payload: { article: Article }) { }
}
export class UpsertArticle implements Action {
  readonly type = ArticleActionTypes.UpsertArticle;

  constructor(public payload: { article: Article }) { }
}

export class AddArticles implements Action {
  readonly type = ArticleActionTypes.AddArticles;

  constructor(public payload: { articles: Article[] }) { }
}

export class UpsertArticles implements Action {
  readonly type = ArticleActionTypes.UpsertArticles;

  constructor(public payload: { articles: Article[] }) { }
}

export class UpdateArticle implements Action {
  readonly type = ArticleActionTypes.UpdateArticle;

  constructor(public payload: { article: Update<Article> }) { }
}
export class UpdateArticleSuccess implements Action {
  readonly type = ArticleActionTypes.UpdateArticleSuccess;

  // constructor(public payload: { article: Update<Article> }) { }
}
export class UpdateArticles implements Action {
  readonly type = ArticleActionTypes.UpdateArticles;

  constructor(public payload: { articles: Update<Article>[] }) { }
}

export class DeleteArticle implements Action {
  readonly type = ArticleActionTypes.DeleteArticle;

  constructor(public payload: { id: number }) { }
}
export class DeleteArticleSuccess implements Action {
  readonly type = ArticleActionTypes.DeleteArticleSuccess;

  // constructor(public payload: { id: string }) { }
}

export class DeleteArticles implements Action {
  readonly type = ArticleActionTypes.DeleteArticles;

  constructor(public payload: { ids: number[] }) { }
}
export class DeleteArticlesSuccess implements Action {
  readonly type = ArticleActionTypes.DeleteArticlesSuccess;

  // constructor(public payload: { count: number[] }) { }
}

export class ClearArticles implements Action {
  readonly type = ArticleActionTypes.ClearArticles;
}

export type ArticleActions =
  | RequestArticles
  | LoadArticles
  | AddArticle
  | AddArticleSuccess
  | UpsertArticle
  | AddArticles
  | UpsertArticles
  | UpdateArticle
  | UpdateArticleSuccess
  | UpdateArticles
  | DeleteArticle
  | DeleteArticleSuccess
  | DeleteArticles
  | DeleteArticlesSuccess
  | ClearArticles;
