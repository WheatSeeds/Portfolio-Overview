import { IAsset } from "../../types/types.ts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store.ts";
import { deleteFromPortfolio } from "../../store/portfolioSlice.ts";
import { getActualAssetInfo } from "../../WebSocket/socket.ts";
import { useEffect, useRef } from "react";

type AssetProps = {
  asset: IAsset;
};

const Asset = ({ asset }: AssetProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const webSocketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    webSocketRef.current = getActualAssetInfo(asset.symbol, dispatch);
  }, [asset.symbol, dispatch]);

  return (
    <div
      className="assets-table-list__item"
      onClick={() => {
        dispatch(deleteFromPortfolio(asset));
        webSocketRef.current!.close();
      }}
    >
      <span>{asset.symbol}</span>
      <span>{asset.quantity}</span>
      <span>${parseFloat(asset.lastPrice).toFixed(10)}</span>
      <span>${asset.quantity * parseFloat(asset.lastPrice)}</span>
      <span>{asset.priceChangePercent}%</span>
    </div>
  );
};

export default Asset;
