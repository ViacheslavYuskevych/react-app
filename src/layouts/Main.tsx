import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TodoPage from '../pages/TodoPage';
import styles from '../styles/main.module.css';
import AuthPage from '../auth/AuthPage';

function Main() {
  return (
    <main className={styles.main}>
      <Router>
        <Routes>
          <Route path='/' element={<TodoPage />} />
          <Route path='/auth' element={<AuthPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default Main;
