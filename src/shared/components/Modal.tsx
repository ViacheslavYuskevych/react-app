import { SyntheticEvent, useRef } from 'react';

import styles from '../../styles/shared/modal.module.css';

function Modal({ children: body, title, onClose }: IProps) {
  const modalElement = useRef<HTMLDivElement>(null);

  const onBackdropClick = (e: SyntheticEvent) => {
    const modalRef = modalElement.current as HTMLDivElement;
    const targetRef = e.target as HTMLDivElement;

    if (!modalRef.contains(targetRef)) onClose();
  };

  return (
    <>
      <div className={styles.backdrop}></div>

      <div className={styles.container} onClick={(e) => onBackdropClick(e)}>
        <div className={styles.modal} ref={modalElement}>
          <div className={styles.header}>
            <h4 className={styles.headerTitle}>{title}</h4>
          </div>

          <div className={styles.body}>{body}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;

interface IProps {
  children: JSX.Element;
  title: string;
  onClose: () => void;
}
