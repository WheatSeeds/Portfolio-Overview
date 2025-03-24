import Button from "../Button.tsx";
import { addToPortfolio, updateShare } from "../../store/portfolioSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store.ts";
import { IAsset } from "../../types/types.ts";

type ModalMenuProps = {
  currentAsset: IAsset;
  assetQuantity: number;
  setAssetQuantity: (assetQuantity: number) => void;
  resetStates: () => void;
};

const ModalMenu = ({
  currentAsset,
  assetQuantity,
  setAssetQuantity,
  resetStates,
}: ModalMenuProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const totalQuantity = useSelector((state: RootState) =>
    state.portfolio.reduce((sum, item) => sum + item.quantity, 0),
  );
  return (
    <div className="modal__content__menu">
      <span>{currentAsset.symbol}</span>

      <input
        className="modal__input-quantity"
        type="number"
        placeholder="Quantity"
        value={assetQuantity}
        onChange={(e) => {
          setAssetQuantity(parseInt(e.target.value));
        }}
      />

      <Button
        className={"modal__buttons__add-button"}
        onClick={() => {
          dispatch(
            addToPortfolio({
              ...currentAsset!,
              quantity: assetQuantity,
              share: 0,
            }),
          );
          resetStates();
          dispatch(updateShare(totalQuantity + assetQuantity));
        }}
      >
        Add
      </Button>
      <Button
        className={"modal__buttons__cancel-button"}
        onClick={() => {
          resetStates();
        }}
      >
        Cancel
      </Button>
    </div>
  );
};

export default ModalMenu;
