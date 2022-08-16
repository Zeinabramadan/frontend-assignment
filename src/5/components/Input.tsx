import { FunctionComponent, ChangeEvent } from "react";
/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

interface InputProps {
  value: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  labelText: string,
}

const Input: FunctionComponent<InputProps> = ({ value, handleChange, labelText }) => {

  return (
    <>
      <label htmlFor="searchInput">{labelText}</label>
      <input value={value} onChange={(e) => handleChange(e)} id="searchInput" />
    </>
  );
};

export default Input;
