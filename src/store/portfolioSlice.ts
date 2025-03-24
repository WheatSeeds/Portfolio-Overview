import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAsset } from "../types/types.tsx";

const portfolioSlice = createSlice({
  name: "portfolio",
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
    updateLastPrice: (
      state,
      action: PayloadAction<{ symbol: string; lastPrice: string }>,
    ) => {
      const asset = state.find((item) => item.symbol === action.payload.symbol);
      if (asset!.lastPrice != action.payload.lastPrice) {
        asset!.lastPrice = action.payload.lastPrice;
      }
    },
  },
});

export const { addToPortfolio, deleteFromPortfolio, updateLastPrice } =
  portfolioSlice.actions;
export default portfolioSlice.reducer;
