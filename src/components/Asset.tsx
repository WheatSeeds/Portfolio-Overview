import {IAsset} from "../types/types.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store.ts";
import {deleteFromPortfolio} from "../store/portfolioSlice.ts";

type AssetProps = {
    asset: IAsset;
}

const Asset = ({asset}: AssetProps) => {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className="asset-item" onClick={() => { dispatch(deleteFromPortfolio(asset));}}>
            <span>{asset.name}</span>
            <span>{asset.quantity}</span>
            <span>{asset.change}</span>
            <span>{asset.currentPrice}</span>
            <span>{asset.totalPrice}</span>
            <span>{asset.share}</span>
        </div>
    );
};

export default Asset;