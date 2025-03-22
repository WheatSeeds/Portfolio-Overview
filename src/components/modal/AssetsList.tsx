import { IAsset } from "../../types/types.ts";
import { useMemo } from "react";

type AssetsListProps = {
  assets: IAsset[];
  searchQuery: string;
  setCurrentAsset: (asset: IAsset) => void;
};

const AssetsList = ({
  assets,
  searchQuery,
  setCurrentAsset,
}: AssetsListProps) => {
  const filteredAssets = useMemo(() => {
    return assets.filter((asset) => asset.symbol.includes(searchQuery));
  }, [assets, searchQuery]);

  return (
    <div className="modal__assets-list">
      {filteredAssets.map((asset: IAsset) => (
        <div
          className="modal__assets-list__item"
          onClick={() => setCurrentAsset(asset)}
        >
          <span>{asset.symbol}</span>
          <span>${asset.lastPrice}</span>
          <span>{asset.priceChangePercent}%</span>
        </div>
      ))}
    </div>
  );
};

export default AssetsList;
