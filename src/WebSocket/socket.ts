import { AppDispatch } from "../store/store.ts";
import { updateLastPrice } from "../store/portfolioSlice.ts";

export function getActualAssetInfo(symbol: string, dispatch: AppDispatch) {
  const wsUrl = `wss://stream.binance.com:9443/stream?streams=${symbol.toLowerCase()}@ticker`;
  const socket = new WebSocket(wsUrl);

  socket.onmessage = (event) => {
    const response = JSON.parse(event.data);
    dispatch(updateLastPrice({ symbol: symbol, lastPrice: response.data.c }));
  };

  return socket;
}
