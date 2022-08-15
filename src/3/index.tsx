import { FunctionComponent, ChangeEvent, useState } from "react";

type Item = {
  id: number;
  name: string;
};

const CONTINENTS = [
  {id: 1, name: "Africa"},
  {id: 2, name: "Asia"},
  {id: 3, name: "Europe"},
  {id: 4, name: "Antarctica"},
  {id: 5, name: "North America"},
  {id: 6, name: "South America"},
  {id: 7, name: "Australia"},
]

const Task3: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<Item[]>(CONTINENTS);

  const filterList = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    /*
      in here we check if the value it's not empty
      we set the items to the filtered list
      else we set it to the original items list
    */ 
    if (value !== "") {
      const filtered = items.filter(
        (item)=> item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
      setItems(filtered);
    } else {
      setItems(CONTINENTS);
    }
    setInputValue(value);
  }

  return (
    <div>
      <label>Search Input: </label>
      <input value={inputValue} onChange={filterList} />
      <br />
      <br />
      <ul>
        {items && items.length > 0 ? (
          items.map((item) => (<li key={item.id}>{item.name}</li>))
        ): (<div>No results found!</div>)}
      </ul>
    </div>
  );
};

export default Task3;