import { IAsset } from "../../types/types.ts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store.ts";
import { deleteFromPortfolio } from "../../store/portfolioSlice.ts";

type AssetProps = {
  asset: IAsset;
};

const Asset = ({ asset }: AssetProps) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div
      className="assets-table-list__item"
      onClick={() => {
        dispatch(deleteFromPortfolio(asset));
      }}
    >
      <span>{asset.symbol}</span>
      <span>{asset.quantity}</span>
      <span>${parseFloat(asset.lastPrice).toFixed(2)}</span>
      <span>${asset.quantity * parseFloat(asset.lastPrice)}</span>
      <span>{asset.priceChangePercent}%</span>
    </div>
  );
};

export default Asset;
