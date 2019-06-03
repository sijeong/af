import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../root-store';
import { selectSelectedArticle } from '../list-post/store/article.reducer';
import { FormBuilder, Validators } from '@angular/forms';
import {
  category,
  articleLiteratureCategory,
  articleMathematicsCategory,
  articleScienceCateory,
  categoryParser,
  subCategoryParser
} from '../models/category';
import { $enum } from 'ts-enum-util';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../list-post/store/article.model';
import { UpsertArticle, DeleteArticle } from '../list-post/store/article.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPostComponent implements OnInit {
  article$ = this.store.pipe(
    select(selectSelectedArticle),
  )

  formChanged$: Observable<Article>;

  _category = category;
  _articleScienceCategory = articleScienceCateory;
  _articleLiteratureCategory = articleLiteratureCategory;
  _articleMathematicsCategory = articleMathematicsCategory;
  _subCategoryParser = subCategoryParser
  keys = Object.keys;

  form = this.fb.group({
    // autosave: false,
    id: [''],
    category: ['', [Validators.required]],
    subCategory: ['', [Validators.required]],
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(45)]],
    content: ['', [Validators.required, Validators.minLength(3)]],
    dateCreated: '',
    color: '',
    viewCount: 0
  })


  constructor(private store: Store<AppState>, private fb: FormBuilder, private router: Router) {

  }
  enumParser(str, enumType) {
    return $enum(enumType).getKeyOrDefault(str)
  }
  ngOnInit() {
  }
  save() {
    if (this.form.valid) {
      const article = this.form.value;
      this.store.dispatch(new UpsertArticle({article}))
    }
  }

  gotoList() {
    this.router.navigate(['/article'])
  }
  delete(article: Article) {
    
    this.store.dispatch(new DeleteArticle({id: article.id}))
    this.router.navigate(['/article'])
  }
}
