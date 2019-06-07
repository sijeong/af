import { SalesState } from "./state";
import { MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store";
import { selectRealTimeState } from './realTimeState';

export const selectSalesState = createFeatureSelector<SalesState>('sales');

const getError = (state: SalesState): any => state.error;
const getData = (state: SalesState): any => state.sales;

export const selectSalesData: MemoizedSelector<object, any> =
    createSelector(selectSalesState, getData);
export const selectSalesError: MemoizedSelector<object, any> =
    createSelector(selectSalesState, getError);