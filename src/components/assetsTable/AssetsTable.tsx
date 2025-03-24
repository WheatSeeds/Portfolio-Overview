import List from "../List.tsx";
import { IAsset } from "../../types/types.ts";
import Asset from "./Asset.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";

type AssetsTableProps = {
  className?: string;
};

const AssetsTable = ({ className }: AssetsTableProps) => {
  const portfolio: IAsset[] = useSelector(
    (state: RootState) => state.portfolio as IAsset[],
  );

  return (
    <section className={`${className} assets-table`}>
      {portfolio.length > 0 ? (
        <>
          <div className="assets-table__top">
            <span className="assets-table__title">Asset</span>
            <span className="assets-table__title">Quantity</span>
            <span className="assets-table__title">Last Price</span>
            <span className="assets-table__title">Total Price</span>
            <span className="assets-table__title">Changes in 24 hours</span>
            <span className="assets-table__title">Share in portfolio</span>
          </div>
          <div className="assets-table__divider"></div>
          <List
            className={"assets-table__list"}
            items={portfolio}
            getKey={(asset) => asset.symbol}
            renderItem={(asset: IAsset) => (
              <Asset asset={asset} key={asset.firstId} />
            )}
          />
        </>
      ) : (
        <span className="assets-table__message">You have no assets</span>
      )}
    </section>
  );
};

export default AssetsTable;
