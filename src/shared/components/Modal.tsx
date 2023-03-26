import { SyntheticEvent } from 'react';

import styles from '../../styles/shared/modal.module.css';

function Modal({ body: Body, title, onClose }: IProps) {
  const onBackdropClick = (e: SyntheticEvent) => {
    console.log(e);

    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={(e) => onBackdropClick(e)}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h4>{title}</h4>
        </div>

        <div className={styles.body}>
          <Body></Body>
        </div>
      </div>
    </div>
  );
}

export default Modal;

interface IProps {
  body: React.FC;
  title: string;
  onClose: () => void;
}
