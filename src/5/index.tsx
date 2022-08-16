import { FunctionComponent, useState, useEffect, ChangeEvent } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";

import { CONTINENTS } from "./data";

const Task4: FunctionComponent = () => {
  const [state, setState] = useState({ value: "", items: CONTINENTS });
  const { value, items } = state;

  const getInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, value: e.target.value });
  }

  useEffect(() =>{
    const filterList = () => {
      if (value !== "") {
        const filtered = items.filter(
          (item)=> item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        );
        setState({...state, items: filtered});
      } else {
        setState({...state, items: CONTINENTS});
      }
    }
    filterList();
  }, [value])

  return (
    <div >
      <Input
        value={value}
        labelText="Search:"
        handleChange={getInputValue}
      />
      <br />
      <List items={items} />
    </div>
  );
};

export default Task4;
