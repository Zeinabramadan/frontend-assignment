import { FunctionComponent, ChangeEvent, useState } from "react";

const Task2: FunctionComponent = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <label>Controlled Input: </label>
      <input value={value} onChange={handleChange} />
      <br />
      <br />
      <p>#Show Input value here# {value}</p>
    </div>
  );
};

export default Task2;
