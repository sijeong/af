import { Action } from "@ngrx/store";
import { MatSnackBarConfig } from "@angular/material";

export enum ActionTypes {
    SNACKBAR_OPEN = '[SNACKBAR] Open',
    SNACKBAR_CLOSE = '[SNACKBAR] Close'
}

export class SnackbarOpen implements Action {
    readonly type = ActionTypes.SNACKBAR_OPEN;
    constructor(public payload: {
        message: string,
        action?: string,
        config?: MatSnackBarConfig
    }) { }
}
export class SnackbarClose implements Action {
    readonly type =ActionTypes.SNACKBAR_CLOSE;
}

export type SnackbarActions = SnackbarOpen | SnackbarClose