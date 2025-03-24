import axios from "axios";
import { IAsset } from "../types/types.ts";

export async function fetchAssets() {
  const response = await axios.get(
    `https://api.binance.com/api/v3/ticker/24hr`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  );
  return response.data.filter((asset: IAsset) => asset.firstId > 0);
}
