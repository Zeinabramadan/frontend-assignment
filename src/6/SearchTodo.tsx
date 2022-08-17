import { useState } from 'react'


const SearchTodo = ({ searchForTodo }: any) => {
  const [value, setValue] = useState("");
  
  function handleChange(event: any) {
    searchForTodo(event.target.value)
    setValue(event.target.value)
  }

  return (
    <div>
       <form className="form">
        <label htmlFor="searchTodo">Search: </label>
        <input
          type="text"
          className="form__input search-input"
          placeholder="Search..."
          value={value}
          onChange={handleChange}
          id="searchTodo"
        />
      </form>
    </div>
  )
}

export default SearchTodo;