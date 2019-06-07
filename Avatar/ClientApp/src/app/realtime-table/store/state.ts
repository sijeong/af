import { Sales } from "src/app/models/sales";

export interface SalesState {
    sales: Sales[],
    error: string
}

export const initialState: SalesState = {
    sales: [],
    error: ''
}