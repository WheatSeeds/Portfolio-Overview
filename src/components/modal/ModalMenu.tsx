import Button from "../Button.tsx";
import { addToPortfolio } from "../../store/portfolioSlice.ts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store.ts";
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
            }),
          );
          resetStates();
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
