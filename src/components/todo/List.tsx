import TodoCard from './Card';
import styles from '../../styles/todo.module.css';
import AddTodoBtn from './AddBtn';
import useTodoList from '../../hooks/useTodoList';

function TodoList() {
  console.log('TodoList render');

  const { onAdd, onEdit, onRemove, onToggleStatus, todoList } = useTodoList();

  return (
    <div className={styles.list}>
      {todoList.map((todo) => (
        <div className={styles.listItem} key={todo.id}>
          <TodoCard
            todo={todo}
            onRemove={onRemove}
            onEdit={onEdit}
            onToggleStatus={onToggleStatus}
            key={todo.id}
          />
        </div>
      ))}

      <AddTodoBtn onAdd={onAdd}></AddTodoBtn>
    </div>
  );
}

export default TodoList;
