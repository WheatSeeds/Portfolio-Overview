import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IAsset } from "../types/types.tsx";

const cartSlice = createSlice({
    name: "cart",
    initialState: [
        {
            name: 'Test1',
            quantity: 2,
            currentPrice: 3,
            totalPrice: 2,
            change: 3,
            share: 2,
        },
        {
            name: 'Test2',
            quantity: 2,
            currentPrice: 3,
            totalPrice: 2,
            change: 3,
            share: 2,
        },
        {
            name: 'Test3',
            quantity: 2,
            currentPrice: 3,
            totalPrice: 2,
            change: 3,
            share: 2,
        },
    ] as IAsset[],
    reducers: {
        deleteFromPortfolio: (state, action: PayloadAction<IAsset>) => {
            return state.filter((item) => item.name !== action.payload.name);
        },
    },
});

export const {deleteFromPortfolio} = cartSlice.actions;
export default cartSlice.reducer;
