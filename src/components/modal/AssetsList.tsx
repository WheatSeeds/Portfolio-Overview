import { IAsset } from "../../types/types.ts";
import { useMemo } from "react";
import List from "../List.tsx";

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
    <List
      className={"assets-list"}
      items={filteredAssets}
      getKey={(asset) => asset.symbol}
      renderItem={(asset: IAsset) => (
        <div
          className="assets-list__item"
          onClick={() => {
            setCurrentAsset(asset);
          }}
        >
          <span>{asset.symbol}</span>
          <span>${asset.lastPrice}</span>
          <span>{asset.priceChangePercent}%</span>
        </div>
      )}
    />
  );
};

export default AssetsList;
