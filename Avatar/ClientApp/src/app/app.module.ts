import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
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

import { environment } from './../environments/environment';
import {
  MatIconModule,
  MatDatepickerModule,
  MatSelectModule,
  MatButtonModule,
  MatNativeDateModule,
  MatInputModule,
  MatMenuModule
} from '@angular/material';
import { MatCardModule } from '@angular/material/card'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
// import {} from '@aspnet/signalr';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowDown,
  faArrowUp,
  faPowerOff,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { FlexLayoutModule } from '@angular/flex-layout'
import { EditPostComponent } from './edit-post/edit-post.component';
import { StatusHeaderComponent } from './status-header/status-header.component';
import { RealtimeTableComponent } from './realtime-table/realtime-table.component';
import { ListPostComponent } from './list-post/list-post.component';
import { RootStoreModule } from './root-store'
import { StoreModule } from '@ngrx/store';
import { reducer as articleReducer } from './list-post/store/article.reducer'
import { SalesReducer as salesReducer } from './realtime-table/store/reducers'
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './list-post/store/article.effects';
import { ConnectFormDirective } from './edit-post/connect-form.directive';
import { ViewPostComponent } from './view-post/view-post.component';
import { CategoryPipe } from './models/category.pipe';
import { SubCategoryPipe } from './models/sub-category.pipe';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular'
import { NgxChartsModule } from '@swimlane/ngx-charts'
import { NgOidcClientModule } from 'ng-oidc-client'
import { WebStorageStateStore } from 'oidc-client';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component'
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
    SubCategoryPipe,
    LoginComponent,
    RegisterComponent,
    AuthCallbackComponent
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
    NgxChartsModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,

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
    AppRoutingModule,
    StoreModule.forFeature('article', articleReducer),
    EffectsModule.forFeature([ArticleEffects]),
    StoreModule.forFeature('sales', salesReducer),
    NgOidcClientModule.forRoot(environment.oidc_conf)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faArrowDown, faArrowUp, faUserCircle,
      faPowerOff);
  }
}
