import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './root-state'
// import { ReportStateModule } from './report-state';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './router/custom-serializer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // ReportStateModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'avatar'
    }),

    // StoreModule.forFeature()
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ]
})
export class RootStoreModule { }
