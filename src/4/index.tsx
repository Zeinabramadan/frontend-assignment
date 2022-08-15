// Style
import { FunctionComponent, useState, FormEvent } from "react";
import "./index.scss";

const Task5: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    // If you want to do something with form submit
    e.preventDefault(); 
    alert(`Email: ${email} \nPassword: ${password}`);
  } 

  return (
    <div id="task-5">
      <form onSubmit={onSubmit} className="form">
        <h1 className="form-heading">Login to your account</h1>
        <div className="form-group">
          <label className="form__label">Email</label>
          <input
            name="email"
            onChange={(event) => setEmail(event.currentTarget.value)}
            value={email}
            className="form__input"
          />
        </div>
        <div className="form-group">
          <label className="form__label">Password</label>
          <input
            name="password"
            onChange={(event) => setPassword(event.currentTarget.value)}
            value={password}
            className="form__input"
          />
        </div>
        <button className="form__button">Login</button>
      </form>
    </div>
  );
};

export default Task5;
