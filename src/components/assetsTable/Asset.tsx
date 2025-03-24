import { IAsset } from "../../types/types.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store.ts";
import {
  deleteFromPortfolio,
  updateShare,
} from "../../store/portfolioSlice.ts";
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

  const totalQuantity = useSelector((state: RootState) =>
    state.portfolio.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <div
      className="assets-table__item"
      onClick={() => {
        dispatch(deleteFromPortfolio(asset));
        webSocketRef.current!.close();
        dispatch(updateShare(totalQuantity - 1));
      }}
    >
      <span className="assets-table__symbol">{asset.symbol}</span>
      <span className="assets-table__quantity">{asset.quantity}</span>
      <span className="assets-table__last-price">
        ${parseFloat(asset.lastPrice).toFixed(5)}
      </span>
      <span className="assets-table__total-price">
        ${(asset.quantity * parseFloat(asset.lastPrice)).toFixed(5)}
      </span>
      {parseFloat(asset.priceChangePercent) >= 0 ? (
        <span className="assets-table__change-percent assets-table__change-percent__up">
          +{asset.priceChangePercent}%
        </span>
      ) : (
        <span className="assets-table__change-percent assets-table__change-percent__down">
          {asset.priceChangePercent}%
        </span>
      )}
      <span className="assets-table__share">{asset.share.toFixed(1)}%</span>
    </div>
  );
};

export default Asset;
