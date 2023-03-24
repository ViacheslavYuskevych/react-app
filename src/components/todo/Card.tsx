import { IconContext } from 'react-icons';
import { MdAccessTime, MdDoneOutline } from 'react-icons/md';

import { ITodo } from '../../models/todo';
import styles from '../../styles/todo.module.css';

function TodoCard({ todo: { description, isDone, title } }: IProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.headerTitle} title={title}>
          {title}
        </span>

        <div>
          {isDone ? (
            <IconContext.Provider value={{ color: 'green', size: '1.5em' }}>
              <MdDoneOutline></MdDoneOutline>
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ color: 'red', size: '1.5em' }}>
              <MdAccessTime></MdAccessTime>
            </IconContext.Provider>
          )}
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.bodyText}>{description}</p>
      </div>

      <div className={styles.footer}>
        <button className={styles.footerBtn}>Edit</button>
        <button className={styles.footerBtn}>Remove</button>
        <button className={styles.footerBtn}>Toggle status</button>
      </div>
    </div>
  );
}

interface IProps {
  todo: ITodo;
}

export default TodoCard;
