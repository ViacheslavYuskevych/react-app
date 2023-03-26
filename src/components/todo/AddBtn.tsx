import { useState } from 'react';
import { IconContext } from 'react-icons';
import { MdLibraryAdd } from 'react-icons/md';

import styles from '../../styles/todo.module.css';
import AddModal from './AddModal';

function AddTodoBtn({ onAdd }: IProps) {
  const [isModalShown, setModalShown] = useState(false);

  const show = () => {
    setModalShown(true);
  };

  const close = () => {
    setModalShown(false);
  };

  return (
    <>
      <button onClick={show} className={styles.addBtn}>
        <IconContext.Provider value={{ color: 'navy', size: '2.5em' }}>
          <MdLibraryAdd></MdLibraryAdd>
        </IconContext.Provider>
      </button>

      {isModalShown && <AddModal onAdd={onAdd} onClose={close} />}
    </>
  );
}

export default AddTodoBtn;

interface IProps {
  readonly onAdd: () => void;
}
function setState() {
  throw new Error('Function not implemented.');
}
