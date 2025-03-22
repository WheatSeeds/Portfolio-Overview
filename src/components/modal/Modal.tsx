type ModalProps = {
  modalVisible: boolean;
  resetStates: () => void;
  children: React.ReactNode;
};

const Modal = ({ resetStates, modalVisible, children }: ModalProps) => {
  return (
    <div
      className={`modal ${modalVisible ? "modal_visible" : "modal_hidden"}`}
      onClick={() => resetStates()}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
      <div className="modal__bg" />
    </div>
  );
};

export default Modal;
