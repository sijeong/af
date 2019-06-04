import { Action } from "@ngrx/store/src";
import { Sales } from '../../models/sales';

export enum ActionTypes {
    DATA_REQUEST = '[SALES] Request',
    DATA_SUCCESS = '[SALES] Success',
    DATA_FAILURE = '[SALES] Fail'
}

export class DataRequestAction implements Action {
    readonly type = ActionTypes.DATA_REQUEST;
}

export class DataSuccessAction implements Action {
    readonly type = ActionTypes.DATA_SUCCESS;
    constructor(public payload: { sales: Sales[] }) { }
}

export class DataFailureAction implements Action {
    readonly type = ActionTypes.DATA_FAILURE;
    constructor(public payload: { error: string }) { }
}

export type Actions = 
    | DataRequestAction
    | DataSuccessAction
    | DataFailureAction