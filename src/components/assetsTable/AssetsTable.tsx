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
    (state: RootState) => state.portfolio,
  );
  return (
    <section className={`${className} assets-table`}>
      {portfolio.length > 0 ? (
        <>
          <div className="assets-table__top">
            <span>Asset</span>
            <span>Quantity</span>
            <span>Last Price</span>
            <span>Total Price</span>
            <span>Changes in 24 hours</span>
          </div>
          <div className="assets-table__divider"></div>
          <List
            className={"assets-table__list"}
            items={portfolio}
            renderItem={(asset: IAsset) => (
              <>
                <Asset asset={asset} key={asset.firstId} />
              </>
            )}
          />
        </>
      ) : (
        <span>You have no assets</span>
      )}
    </section>
  );
};

export default AssetsTable;
