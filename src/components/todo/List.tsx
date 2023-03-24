import { v4 as uuidv4 } from 'uuid';

import { ITodo } from '../../models/todo';
import TodoCard from './Card';
import styles from '../../styles/todo.module.css';

function TodoList() {
  const todoList: ITodo[] = [
    {
      id: uuidv4(),
      title: 'Move to Thailand',
      description: 'Move with all family to Thailand and spend there fun time.',
      isDone: true,
    },
    {
      id: uuidv4(),
      title: 'Find new project',
      description: 'Find new project or company to raise job compensation.',
      isDone: false,
    },
    {
      id: uuidv4(),
      title:
        'Item to deleteItem to delete Item to delete Item to delete Item to delete',
      description: 'Find new project or company to raise job compensation.',
      isDone: false,
    },
  ];

  return (
    <div className={styles.list}>
      {todoList.map((todo) => (
        <div className={styles.listItem}>
          <TodoCard todo={todo} key={todo.id} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
