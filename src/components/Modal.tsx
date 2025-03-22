import '../styles/Modal.css'

type ModalProps = {
    setModalVisible: (visible: boolean) => void;
    modalVisible: boolean,
}

const Modal = ({setModalVisible, modalVisible}: ModalProps) => {
    return (
        <div className={(modalVisible ? "modal-visible" : "modal-hidden")} onClick={() => setModalVisible(!modalVisible)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <input type="text" placeholder="Currency search" />
                <input type="number" placeholder="Quantity" />
            </div>
            <div className="modal-bg"/>
        </div>
    );
};

export default Modal;