import Header from "./components/Header.tsx";
import { IAsset } from "./types/types.ts";
import Modal from "./components/modal/Modal.tsx";
import { useEffect, useState } from "react";
import { fetchAssets } from "./API/api.ts";
import "./styles.scss";
import AssetsTable from "./components/assetsTable/AssetsTable.tsx";
import ModalMenu from "./components/modal/ModalMenu.tsx";
import AssetsList from "./components/modal/AssetsList.tsx";
import "./WebSocket/socket.ts";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [assets, setAssets] = useState<IAsset[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentAsset, setCurrentAsset] = useState<IAsset | undefined>(
    undefined,
  );
  const [assetQuantity, setAssetQuantity] = useState(1);

  function resetStates() {
    setSearchQuery("");
    setCurrentAsset(undefined);
    setModalVisible(false);
    setAssetQuantity(1);
  }

  useEffect(() => {
    loadAssetsData();
  }, []);

  async function loadAssetsData() {
    const data = await fetchAssets();
    setAssets(data);
  }

  return (
    <>
      <Header setModalVisible={setModalVisible} modalVisible={modalVisible} />

      <main className="main">
        <AssetsTable className={"main__section"} />

        <Modal modalVisible={modalVisible} resetStates={resetStates}>
          <input
            className="modal__input-search"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value.toUpperCase())}
          />

          <AssetsList
            assets={assets}
            searchQuery={searchQuery}
            setCurrentAsset={setCurrentAsset}
          />

          {typeof currentAsset !== "undefined" ? (
            <ModalMenu
              currentAsset={currentAsset}
              assetQuantity={assetQuantity}
              setAssetQuantity={setAssetQuantity}
              resetStates={resetStates}
            />
          ) : (
            <></>
          )}
        </Modal>
      </main>
    </>
  );
};

export default App;
