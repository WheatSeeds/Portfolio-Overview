import { AppDispatch } from "../store/store.ts";
import { updateActualInfo } from "../store/portfolioSlice.ts";

export function getActualAssetInfo(symbol: string, dispatch: AppDispatch) {
  const wsUrl = `wss://stream.binance.com:9443/stream?streams=${symbol.toLowerCase()}@ticker`;
  const socket = new WebSocket(wsUrl);

  socket.onmessage = (event) => {
    const response = JSON.parse(event.data);
    dispatch(
      updateActualInfo({
        symbol: response.data.s,
        lastPrice: response.data.c,
        priceChangePercent: response.data.P,
      }),
    );
  };
  return socket;
}
