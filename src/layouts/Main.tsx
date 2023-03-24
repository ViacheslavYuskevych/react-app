import TodoList from '../components/todo/List';
import styles from '../styles/main.module.css';

function Main() {
  return (
    <main className={styles.main}>
      <TodoList></TodoList>
    </main>
  );
}

export default Main;
