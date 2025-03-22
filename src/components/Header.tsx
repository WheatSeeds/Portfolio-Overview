import Button from "./Button.tsx";

type HeaderProps = {
    setModalVisible: (visible: boolean) => void;
    modalVisible: boolean;
}

const Header = ({setModalVisible, modalVisible}: HeaderProps) => {
    return (
        <header>
            <Button onClick={() => setModalVisible(!modalVisible)}>Add</Button>
        </header>
    );
};

export default Header;