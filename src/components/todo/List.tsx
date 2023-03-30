import TodoCard from './Card';
import styles from '../../styles/todo.module.css';
import AddTodoBtn from './AddBtn';
import useTodoList from '../../hooks/useTodoList';
import TodoFilter from './Filter';

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
  } = useTodoList();

  return (
    <div className='w-100'>
      <TodoFilter search={search} setSearch={setSearch}></TodoFilter>

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
