import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { MatSnackBar } from "@angular/material";
import { Observable } from "rxjs";
import { ActionTypes, SnackbarClose, SnackbarActions, SnackbarOpen } from "./actions";
import { tap, delay, map } from "rxjs/operators";

@Injectable()
export class SnackbarEffects {

    @Effect({ dispatch: false })
    closeSnackBar: Observable<any> = this.actions.pipe(
        ofType<SnackbarClose>(ActionTypes.SNACKBAR_CLOSE),
        tap(() => this.matSnackBar.dismiss())
    )
    @Effect()
    showSnackbar: Observable<any> = this.actions.pipe(
        ofType<SnackbarOpen>(ActionTypes.SNACKBAR_OPEN),
        tap(a => console.log(a)),
        tap(a => this.matSnackBar.open(a.payload.message, a.payload.action, a.payload.config)),
        delay(2000),
        map(() => new SnackbarClose())
    )
    constructor(private actions: Actions, private matSnackBar: MatSnackBar) { }
}