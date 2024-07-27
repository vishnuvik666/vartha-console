import React from "react";
import { IoClose } from "react-icons/io5";
import styles from "./Modal.module.scss";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <IoClose size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
