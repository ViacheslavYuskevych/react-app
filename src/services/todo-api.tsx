import axios from 'axios';

import { ITodo } from '../models/todo';

class TodoApi {
  private static get _baseUrl() {
    const { REACT_APP_API_URL } = process.env;

    return `${REACT_APP_API_URL}/todos`;
  }

  static get() {
    return axios.get<ITodo[]>(this._baseUrl);
  }
}

export default TodoApi;
