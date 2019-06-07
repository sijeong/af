import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import { SalesReducer } from './reducers'
import { AppState } from "../../root-store/index";
import { SalesState } from "./state";

export const FEATURE_NAME = 'realTimes';

export const selectRealTimeState = createFeatureSelector<RealTimeState>(FEATURE_NAME);

export interface RealTimeState {
    sales: SalesState
}

export interface State extends AppState {
    realTimes: RealTimeState
}

export const reducers: ActionReducerMap<RealTimeState> = {
    sales: SalesReducer
}