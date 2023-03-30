import { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IFormValue } from '../components/todo/AddForm';
import { ITodo } from '../models/todo';

const useTodoList = (): IUseTodoListResponse => {
  const [todoList, setTodoList] = useState(MOCK_TODO_LIST);
  const [search, setSearch] = useState('');

  console.log('useTodoList hook');

  const filteredTodoList = useMemo(
    () =>
      todoList.filter(
        ({ description, title }) =>
          !search ||
          description.toLowerCase().includes(search.toLowerCase()) ||
          title.toLowerCase().includes(search.toLowerCase())
      ),
    [todoList, search]
  );

  const onRemove = ({ id }: ITodo) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const onEdit = (todo: ITodo) => {
    /* TODO */
  };

  const onToggleStatus = ({ id, isDone }: ITodo) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !isDone } : todo
      )
    );
  };

  const onAdd = ({ description, isDone, title }: IFormValue) => {
    setTodoList([...todoList, { description, isDone, title, id: uuidv4() }]);
  };

  return {
    todoList: filteredTodoList,
    onRemove,
    onAdd,
    onEdit,
    onToggleStatus,
    search,
    setSearch,
  };
};

export default useTodoList;

interface IUseTodoListResponse {
  todoList: ITodo[];
  onRemove: (todo: ITodo) => void;
  onEdit: (todo: ITodo) => void;
  onAdd: (todo: IFormValue) => void;
  onToggleStatus: (todo: ITodo) => void;
  search: string;
  setSearch: (search: string) => void;
}

const MOCK_TODO_LIST: ITodo[] = [
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
