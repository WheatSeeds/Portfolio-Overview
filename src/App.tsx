import Header from "./components/Header.tsx";
import List from "./components/List.tsx";
import {IAsset} from "./types/types.ts";
import Asset from "./components/Asset.tsx";
import "./App.css"
import {useSelector} from "react-redux";
import {RootState} from "./store/store.ts";

const App = () => {
    const portfolio: IAsset[] = useSelector((state: RootState) => state.portfolio);
    return (
        <>
            <Header />
            <div className="assets-list">
                <List items={portfolio} renderItem={(asset: IAsset) => (
                    <Asset asset={asset} key={asset.name} />
                )} />
            </div>
        </>
    );
};

export default App;