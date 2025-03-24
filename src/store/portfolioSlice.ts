import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAsset } from "../types/types.tsx";

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: [] as IAsset[],
  reducers: {
    addToPortfolio: (state, action: PayloadAction<IAsset>) => {
      const asset = state.find((item) => item.symbol === action.payload.symbol);
      if (asset) {
        asset.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    deleteFromPortfolio: (state, action: PayloadAction<IAsset>) => {
      return state.filter((item) => item.firstId !== action.payload.firstId);
    },
    updateActualInfo: (
      state,
      action: PayloadAction<{
        symbol: string;
        lastPrice: string;
        priceChangePercent: string;
      }>,
    ) => {
      const asset = state.find((item) => item.symbol === action.payload.symbol);
      if (asset) {
        asset.lastPrice = action.payload.lastPrice;
        asset.priceChangePercent = action.payload.priceChangePercent;
      }
    },
    updateShare: (state, action: PayloadAction<number>) => {
      state.forEach((item) => {
        item.share = (item.quantity / action.payload) * 100;
      });
    },
  },
});

export const {
  addToPortfolio,
  deleteFromPortfolio,
  updateActualInfo,
  updateShare,
} = portfolioSlice.actions;
export default portfolioSlice.reducer;
