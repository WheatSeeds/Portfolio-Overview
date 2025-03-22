import Button from "./Button.tsx";

type HeaderProps = {
  setModalVisible: (visible: boolean) => void;
  modalVisible: boolean;
};

const Header = ({ setModalVisible, modalVisible }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-content">
        <span className="header-content__title">Portfolio Overview</span>
        <Button
          className="header-content__button"
          onClick={() => setModalVisible(!modalVisible)}
        >
          Add
        </Button>
      </div>
    </header>
  );
};

export default Header;
