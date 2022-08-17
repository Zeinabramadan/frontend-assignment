import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({ addTodo }: any) => {
  const [value, setValue] = useState("");

  function handleChange(event: any) {
    event.preventDefault();
    setValue(event.target.value)
  }

  // Receiving the value from the input and adding it to the list
  // and reset the input value to empty string
  function newTodo(event: any) {
    event.preventDefault();
    if (!value) {
      return alert('Todo can not be empty!')
    }
    const newTodo = {id: uuidv4(), task: value, status: 'pending'}
    addTodo(newTodo);
    setValue('');
  }

  return (
    <form className="form" onSubmit={newTodo}>
      <input
        type="text"
        className="form__input"
        placeholder="Add a new task..."
        value={value}
        onChange={handleChange}
        id="createTodo"
      />
    </form>
  )
}

export default AddTodo;