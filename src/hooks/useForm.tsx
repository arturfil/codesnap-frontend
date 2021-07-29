import React, { ChangeEvent, useState } from 'react'

// T is refering to any type of object or data TYPE -> T
export const useForm = <T extends Object>(initState: T) => {
  const [state, setState] = useState(initState);

  // here we are going to be controlling the state of an input view the name property of the input el.
  const changing = (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [name]: event.target.value
    });
  }

  // this is a helper function that is going to set initial state of all the inputs within a form
  const setFormValue = (form: T) => {
    setState(form);
  }

  // we are going to return the states and the functions in order to use them outside this hook
  return {
    ...state,
    form: state,
    changing,
    setFormValue
  }
}
