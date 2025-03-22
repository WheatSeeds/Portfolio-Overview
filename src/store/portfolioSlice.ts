import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAsset } from "../types/types.tsx";

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as IAsset[],
  reducers: {
    addToPortfolio: (state, action: PayloadAction<IAsset>) => {
      if (state.find((item) => item.firstId === action.payload.firstId)) {
        const asset = state.find(
          (item) => item.firstId === action.payload.firstId,
        );
        asset!.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    deleteFromPortfolio: (state, action: PayloadAction<IAsset>) => {
      return state.filter((item) => item.firstId !== action.payload.firstId);
    },
  },
});

export const { addToPortfolio, deleteFromPortfolio } = cartSlice.actions;
export default cartSlice.reducer;
