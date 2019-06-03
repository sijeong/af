import { ActionReducerMap, MetaReducer, createFeatureSelector } from "@ngrx/store";
import { RouterStateUrl } from './router/router.state'
import { routerReducer, RouterReducerState } from "@ngrx/router-store";

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer
}

export const metaReducers: MetaReducer<AppState>[] = []

export interface AppState {
    router: RouterReducerState<RouterStateUrl>;
}
