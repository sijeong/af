import { initialState, SalesState } from "./state";
import { Actions, ActionTypes } from "./actions";

export function SalesReducer(state = initialState, action: Actions): SalesState{
    switch(action.type){
        case ActionTypes.DATA_REQUEST:
            return {
                ...state,
            };
        case ActionTypes.DATA_SUCCESS:
            return {
                ...state,
                sales: action.payload.sales,
                error: null
            };
        case ActionTypes.DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return{
                ...state,
            }
    }
}