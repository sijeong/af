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
import * as blockEditor from '@ckeditor/ckeditor5-build-balloon-block'
@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  article$ = this.store.pipe(
    select(selectSelectedArticle)
  )
  editor = blockEditor;
  
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.editor.readonly = true;
  }

  delete(article: Article) {
    this.store.dispatch(new DeleteArticle({id: article.id}))
    this.router.navigate(['/article'])
  }

  edit(article: Article) {
    this.router.navigate(['/editor', article.id])
  }

  goToList(){
    this.router.navigate(['/article'])
  }
}
