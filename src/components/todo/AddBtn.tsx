import { IconContext } from 'react-icons';
import { MdLibraryAdd } from 'react-icons/md';

import styles from '../../styles/todo.module.css';

function AddTodoBtn({ onClick }: IProps) {
  return (
    <button onClick={onClick} className={styles.addBtn}>
      <IconContext.Provider value={{ color: 'navy', size: '2.5em' }}>
        <MdLibraryAdd></MdLibraryAdd>
      </IconContext.Provider>
    </button>
  );
}

export default AddTodoBtn;

interface IProps {
  readonly onClick: () => void;
}
