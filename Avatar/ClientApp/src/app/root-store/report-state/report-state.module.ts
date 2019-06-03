import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
// import {FEATURE_NAME, reducers as reportReducers} from './reportState'
import {reducer as articleReducer} from '../../list-post/store/article.reducer'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // StoreModule.forFeature(FEATURE_NAME, reportReducers),
    StoreModule.forFeature('article', articleReducer)
  ]
})
export class ReportStateModule { }

