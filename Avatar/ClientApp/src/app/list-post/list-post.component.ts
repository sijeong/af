import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { selectAllArticles } from './store/article.reducer';
import { RequestArticles, DeleteArticle, DeleteArticles } from './store/article.actions';

import { GridOptions } from 'ag-grid-community';
import { Router } from '@angular/router';
import { AppState } from '../root-store';
import { $enum } from 'ts-enum-util'
import { getToken } from '@angular/router/src/utils/preactivation';
import { FormBuilder } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import {
  category,
  articleLiteratureCategory,
  articleMathematicsCategory,
  articleScienceCateory,
  // categoryParser,
  // subCategoryParser
} from '../models/category';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  articles$ = this.store.pipe(
    select(selectAllArticles),
  )
  columnDefs;
  rowSelection;
  gridOptions;

  form = this.fb.group({
    autosave: false,
    category: [''],
    subCatgory: [''],
    search: ['']
  })

  constructor(private store: Store<AppState>, private router: Router, private fb: FormBuilder, private service: ArticleService) {
    this.columnDefs = [
      {
        headerName: 'id',
        field: 'id',
        width: 100,
        filterParams: { newRowsAction: "keep" },
        checkboxSelection: function (params) {
          return params.columnApi.getRowGroupColumns().length === 0;
        },
        headerCheckboxSelection: function (params) {
          return params.columnApi.getRowGroupColumns().length === 0;
        }
      },
      {
        headerName: "Category",
        field: "category",
        width: 120,
        filterParams: { newRowsAction: "keep" },
        valueGetter: this.categoryParser,
      },
      {
        headerName: "SubCategory",
        field: "subCategory",
        width: 120,
        filterParams: { newRowsAction: "keep" },
        valueGetter: this.subCategoryParser,
      },
      {
        headerName: "Title",
        field: "title",
        width: 320,
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Date",
        field: "dateCreated",
        width: 150,
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "View",
        field: "viewCount",
        width: 100,
        filterParams: { newRowsAction: "keep" }
      }
    ]

    this.rowSelection = "multiple";
    this.gridOptions = <GridOptions>{}
    this.gridOptions.onRowClicked = (params) => {
      console.log(params.data.id)
      this.router.navigate(['/viewer', params.data.id])
    }
    /// trace selection state !!!
    
    
  }

  ngOnInit() {
    this.store.dispatch(new RequestArticles());
  }
  submit() {

  }
  getSelectedRows(): any[] {
    return this.gridOptions.api.getSelectedRows().map(r => r.id);
  }
  delete() {
    this.store.dispatch(new DeleteArticles({ ids: this.getSelectedRows() }));
  }
  create() {
    this.router.navigate(['/editor'])
  }
  categoryParser = (params) => {
    return $enum(category).getKeyOrDefault(params.data.category.trim()).toString()
  }
  subCategoryParser = (params) => {
    const val = params.data.subCategory.trim()
    if (Object.keys(articleLiteratureCategory).some(x => x == $enum(articleLiteratureCategory).getKeyOrDefault(val))) {
      return $enum(articleLiteratureCategory).getKeyOrDefault(val).toString()
    } else if (Object.keys(articleMathematicsCategory).some(x => x == $enum(articleMathematicsCategory).getKeyOrDefault(val))) {
      return $enum(articleMathematicsCategory).getKeyOrDefault(val).toString()
    } else if (Object.keys(articleScienceCateory).some(x => x == $enum(articleScienceCateory).getKeyOrDefault(val))) {
      return $enum(articleScienceCateory).getKeyOrDefault(val).toString()
    }
  }
}

