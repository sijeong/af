import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./root-state";
import { RouterReducerState } from "@ngrx/router-store";
import { RouterStateUrl } from "./router/router.state";

export const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router')
// export const getRouterInfo = createSelector(
//     selectRouterState,
//     state => state.state
// )
