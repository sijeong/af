import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../root-store';
import { selectSelectedArticle } from '../list-post/store/article.reducer';
import { FormBuilder, Validators, Form } from '@angular/forms';
import {
  category,
  articleLiteratureCategory,
  articleMathematicsCategory,
  articleScienceCateory,
  categoryParser,
  subCategoryParser
} from '../models/category';
import { $enum } from 'ts-enum-util';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../list-post/store/article.model';
import { UpsertArticle, DeleteArticle, AddArticle } from '../list-post/store/article.actions';
import { debounceTime, filter } from 'rxjs/operators';
import * as blockEditor from '@ckeditor/ckeditor5-build-balloon-block'
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
  isNew: boolean = false;
  editor = blockEditor;
  
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
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    content: ['', [Validators.required, Validators.minLength(3)]],
    dateCreated: '',
    color: '',
    viewCount: 0
  })


  constructor(private store: Store<AppState>, private fb: FormBuilder, private router: Router, private activeRoute: ActivatedRoute) {

  }
  enumParser(str, enumType) {
    return $enum(enumType).getKeyOrDefault(str)
  }
  ngOnInit() {
    if (!this.activeRoute.snapshot.params.id) {
      this.isNew = true;
    }

    this.formChanged$ = this.form.valueChanges.pipe(
      debounceTime(500),
    )
  }
  save() {
    if (this.form.valid) {
      const article = this.form.value;
      this.store.dispatch(new UpsertArticle({ article }))
    }
  }
  create() {
    console.log('add called')
    if(this.form.valid){
      console.log('valid')
      const article = this.form.value;
      this.store.dispatch(new AddArticle({article}));
    }
  }
  gotoList() {
    this.router.navigate(['/article'])
  }
  delete(article: Article) {

    this.store.dispatch(new DeleteArticle({ id: article.id }))
    this.router.navigate(['/article'])
  }
  selectedCategory;

  onCategoryChanged(){
    console.log(this.selectedCategory)
  }
}
