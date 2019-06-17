import { SnackbarActions, ActionTypes } from "./actions";

export interface State {
    show: boolean;
}

const initialState: State = {
    show: false
}

export function reducer(state: State = initialState, action: SnackbarActions) {
    switch (action.type) {
        case ActionTypes.SNACKBAR_CLOSE:
            return { ...state, show: false };
        case ActionTypes.SNACKBAR_OPEN:
            return { ...state, show: true };
        default:
            return state;
    }
}
