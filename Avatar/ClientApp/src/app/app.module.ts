import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { MonthlyCalendarComponent } from './monthly-calendar/monthly-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { JoditAngularModule } from 'jodit-angular';
import { AgGridModule } from 'ag-grid-angular'
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule, MatDatepickerModule, MatSelectModule, MatButtonModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
// import {} from '@aspnet/signalr';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FlexLayoutModule } from '@angular/flex-layout'
import { EditPostComponent } from './edit-post/edit-post.component';
import { StatusHeaderComponent } from './status-header/status-header.component';
import { RealtimeTableComponent } from './realtime-table/realtime-table.component';
import { ListPostComponent } from './list-post/list-post.component';
import { RootStoreModule } from './root-store'
import { StoreModule } from '@ngrx/store';
import { reducer as articleReducer } from './list-post/store/article.reducer'
import { reducers as realtimeReducer, FEATURE_NAME } from './realtime-table/store/realTimeState'
import { SalesReducer as salesReducer } from './realtime-table/store/reducers'
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './list-post/store/article.effects';
import { ConnectFormDirective } from './edit-post/connect-form.directive';
import { ViewPostComponent } from './view-post/view-post.component';
import { CategoryPipe } from './models/category.pipe';
import { SubCategoryPipe } from './models/sub-category.pipe';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular'
import { ChartsModule } from 'ng2-charts'
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MonthlyCalendarComponent,
    EditPostComponent,
    StatusHeaderComponent,
    RealtimeTableComponent,
    ListPostComponent,
    ConnectFormDirective,
    ViewPostComponent,
    CategoryPipe,
    SubCategoryPipe
  ],
  imports: [
    BrowserAnimationsModule,
    FullCalendarModule,
    JoditAngularModule,
    CKEditorModule,
    RootStoreModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AgGridModule.withComponents([]),
    FontAwesomeModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatTabsModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'article', component: ListPostComponent },
      { path: 'calendar', component: MonthlyCalendarComponent },
      { path: 'viewer/:id', component: ViewPostComponent },
      { path: 'editor/:id', component: EditPostComponent },
      { path: 'editor', component: EditPostComponent },
    ]),
    StoreModule.forFeature('article', articleReducer),
    EffectsModule.forFeature([ArticleEffects]),
    StoreModule.forFeature(FEATURE_NAME, realtimeReducer)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  //   constructor() {
  //     library.add(faArrowDown, faArrowUp);
  //   }
}
