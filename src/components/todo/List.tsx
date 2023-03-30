import TodoCard from './Card';
import styles from '../../styles/todo.module.css';
import AddTodoBtn from './AddBtn';
import useTodoList from '../../hooks/useTodoList';
import TodoFilter, { IProps as ITodoFilterProps } from './Filter';

function TodoList() {
  console.log('TodoList render');

  const {
    onAdd,
    onEdit,
    onRemove,
    onToggleStatus,
    todoList,
    search,
    setSearch,
    setSort,
    sort,
  } = useTodoList();

  const todoListFilterProps: ITodoFilterProps = {
    search,
    setSearch,
    setSort,
    sort,
  };

  return (
    <div className='w-100'>
      <TodoFilter {...todoListFilterProps}></TodoFilter>

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
      </div>

      <AddTodoBtn onAdd={onAdd}></AddTodoBtn>
    </div>
  );
}

export default TodoList;
