import { FunctionComponent } from 'react';

// Components
import ToDo from './Todo';

// Types
import { Todo } from './Types'

interface TodoProps {
  list: Todo[];
  setList: Function,
}
const TodoList: FunctionComponent<TodoProps> = ({ list, setList }) => {

  // Remove todo from the list
  const removeTodo = (id: number | string) => {
    const removedArr = [...list].filter(todo => todo.id !== id);
    setList(removedArr);
  };

  // Mark todo as done or pending
  const toggleTodo = (id: number | string): void => {
    console.log(list)
    setList((prev: any) => prev.map((todo: Todo) => {
      if (todo.id === id) {
        if (todo.status === 'pending') {
          todo.status = 'done';
        } else {
          todo.status = 'pending';
        }
      };
      return todo;
    }));
  };

  // Render the list of todos based on their status
  const lists = () => {
    const doneTodos = list.filter((todo: Todo) => todo.status === 'done');
    const pendingTodos = list.filter((todo: Todo) => todo.status === 'pending');
    return {doneTodos, pendingTodos};
  }

  return (
    <section className='todos'>
      <div className='todos-container'>
        <h3 className='todos-title'>Pending</h3>
        {lists().pendingTodos.map((todo: any) => (<ToDo key={todo.id} todo={todo} deleteTodo={removeTodo} toggleTodo={toggleTodo} />))}
      </div>
      <div className='todos-container'> 
        <h3 className='todos-title'>Done</h3>
        {lists().doneTodos.map((todo: any) => (<ToDo key={todo.id} todo={todo} deleteTodo={removeTodo} toggleTodo={toggleTodo} />))}
      </div>
    </section>
  )
}

export default TodoList;