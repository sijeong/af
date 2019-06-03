import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../root-store';
import { Store, select } from '@ngrx/store';
import { selectSelectedArticle } from '../list-post/store/article.reducer';
import { Article } from '../list-post/store/article.model';
import { DeleteArticle } from '../list-post/store/article.actions';
import {
  category,
  articleLiteratureCategory,
  articleMathematicsCategory,
  articleScienceCateory,
  categoryParser,
  subCategoryParser
} from '../models/category'
@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  article$ = this.store.pipe(
    select(selectSelectedArticle)
  )
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
  }

  delete(article: Article) {
    this.store.dispatch(new DeleteArticle({id: article.id}))
    this.router.navigate(['/article'])
  }

  edit(article: Article) {
    this.router.navigate(['/editor', article.id])
  }
}
