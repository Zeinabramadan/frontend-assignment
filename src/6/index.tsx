import { useState } from "react";
// Style
import "./index.scss";
// Components
import TodoList from "./TodoList";
import SearchTodo from "./SearchTodo";
import AddTodo from "./AddTodo";
// Types
import { Todo } from './Types'
// Mock data
import data from './data.json'

/*
 * Create the components you need in the components folder.
 * You may find inspiration in task 4
 */

const Task6: React.FunctionComponent = () => {
  const [list, setList] = useState<Todo[]>(data);

  // Search for specific todo otherwise return all todos
  const searchTodo = (value: string) => {
    if(value !== '') {
      const newTodos = list.filter(
        (todo: any)=> todo.task.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );;
      setList(newTodos);
    } else {
      setList(list);
    }
  }

  // Add new todo to the list
  const addTodo = (todo: Todo) => {
    if(!todo) {
      return alert('Todo can not be empty!')
    }
    const newTodos = [...list, todo];
    setList(newTodos);
  };

  return (
    <div id="task-6">
      <div className="search">
        <h2>Todo List</h2>
        <SearchTodo searchForTodo={searchTodo} />
      </div>
      <AddTodo addTodo={addTodo} />
      <TodoList list={list} setList={setList} />
    </div>
  );
};

export default Task6;
