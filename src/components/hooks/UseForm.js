import { useState } from "react";

export const UseForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  //reset the valuesForm
  const resetForm = () => {
    setValues(initialState);
  };
  //update the fields
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
  //return the valuesForm
  return [values, handleInputChange, resetForm];
};
