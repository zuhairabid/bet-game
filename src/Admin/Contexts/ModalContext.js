import { createContext, useContext, useState } from "react";

const Modal = createContext();

const ModalContext = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showComponent, setShowComponent] = useState();

  return (
    <Modal.Provider
      value={{ showModal, setShowModal, showComponent, setShowComponent }}
    >
      {children}
    </Modal.Provider>
  );
};

export default ModalContext;

export const ModalState = () => {
  return useContext(Modal);
};
