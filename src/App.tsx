import Header from "./components/Header.tsx";
import List from "./components/List.tsx";
import {IAsset} from "./types/types.ts";
import Asset from "./components/Asset.tsx";
import "./App.css"
import {useSelector} from "react-redux";
import {RootState} from "./store/store.ts";
import Modal from "./components/Modal.tsx";
import {useEffect, useState} from "react";

const App = () => {
    const portfolio: IAsset[] = useSelector((state: RootState) => state.portfolio);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        console.log(modalVisible);
    }, [modalVisible]);

    return (
        <>
            <Header setModalVisible={setModalVisible} modalVisible={modalVisible}/>
            <div className="assets-list">
                {portfolio.length > 0
                    ?<List items={portfolio} renderItem={(asset: IAsset) => (
                        <Asset asset={asset} key={asset.name} />
                    )} />
                    :<span>You have no assets</span>
                }
            </div>
            <Modal setModalVisible={setModalVisible} modalVisible={modalVisible}/>
        </>
    );
};

export default App;