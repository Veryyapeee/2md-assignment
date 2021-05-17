import React from "react";

import { motion, AnimatePresence } from "framer-motion";

import styles from "./Modal.module.css";

interface Props {
  children: JSX.Element | string;
  show: boolean;
  onClose: () => void;
}

const Modal = (props: Props) => {
  let modalClasses = [styles.modalCon];
  if (props.show) {
    modalClasses = [styles.modalCon, styles.display];
  }
  return (
    <AnimatePresence>
      {props.show && (
        <div className={modalClasses.join(" ")} onClick={props.onClose}>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.1,
                duration: 0.3,
              },
            }}
            className={styles.modalContent}
            onClick={(e: any) => {
              e.stopPropagation();
            }}
          >
            {props.children}
            <span onClick={props.onClose} className={styles.modalClose}>
              &#10005;
            </span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
