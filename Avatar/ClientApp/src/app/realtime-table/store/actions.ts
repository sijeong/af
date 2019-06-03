import { Action } from "@ngrx/store";

export enum ActionTypes {
    DATA_REQUEST = '',
    DATA_SUCCESS = '',
    DATA_FAILURE = ''
}

export class DataRequestAction implements Action {
    readonly type = ActionTypes.DATA_REQUEST;
}

export class DataSucessAction implements Action{
    readonly type = ActionTypes.DATA_SUCCESS;
    // constructor(public payload: {a: any})
}

export class DataFailureAction implements Action{
    readonly type = ActionTypes.DATA_FAILURE;

}

export type Actions =
    | DataRequestAction