import { useState } from 'react';

import Modal from '../../shared/components/Modal';
import styles from '../../styles/shared/modal.module.css';
import AddForm, { IFormValue } from './AddForm';

function AddModal({ onAdd, onClose }: IProps) {
  const [value, setValue] = useState<IFormValue>({
    description: '',
    isDone: false,
    title: '',
  });

  return (
    <Modal
      title='Add todo'
      onClose={onClose}
      modalClassNames={[styles.formModal]}
    >
      <AddForm value={value} setValue={setValue}></AddForm>
      <></>
    </Modal>
  );
}

export default AddModal;

interface IProps {
  readonly onAdd: () => void;
  readonly onClose: () => void;
}
