export interface SalesState {
    sales: any | null,
    error: any | null
}

export const initialState: SalesState = {
    sales: null,
    error: null
}