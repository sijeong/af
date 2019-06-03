import { AppState } from "../root-state";
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

// import { reducer as eventReducer, State as eventState } from '../../monthly-calendar/store/event.reducer';
// import { State as articleState, reducer as articleReducer } from '../../list-post/store/article.reducer'

export const FEATURE_NAME = 'reports';

export interface ReportState {
    // articles: articleState,
    // events: eventState
}

export const reducers: ActionReducerMap<ReportState> = {
    // articles: articleReducer,
    // events: eventReducer,
}
export interface State extends AppState {
    reports: ReportState
}

