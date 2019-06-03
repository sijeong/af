import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../root-store';
import { selectSelectedArticle } from '../list-post/store/article.reducer';
import { FormBuilder, Validators } from '@angular/forms';
import { category, articleLiteratureCategory, articleMathematicsCategory, articleScienceCateory } from '../list-post/list-post.component';
import { $enum } from 'ts-enum-util';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../list-post/store/article.model';

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

  category = category;

  keys = Object.keys;

  form = this.fb.group({
    autosave: false,
    category: ['', [Validators.required]],
    subCategory: ['', [Validators.required]],
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(45)]],
    content: ['', [Validators.required, Validators.minLength(3)]],
    dateCreated: '',
    viewCount: 0
  })

  constructor(private store: Store<AppState>, private fb: FormBuilder, private router: Router) {

  }
  enumParser(str){
    return $enum(category).getKeyOrThrow(str).toString()
  }
  ngOnInit() {
  }
  submit() {

  }

  gotoList(){
    this.router.navigate(['/article'])
  }
  delete(){

  }
}
