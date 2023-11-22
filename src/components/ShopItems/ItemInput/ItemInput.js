import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
// import './ItemInput.css';
// import styled from 'styled-components';
import styled from './ItemInput.module.css';
// const FormControl = styled.div`
// 
  // margin: 0.5rem 0;
// 
// & label {
  // font-weight: bold;
  // display: block;
  // margin-bottom: 0.5rem;
  // color:${props=>props.invalid ? 'red' : 'black'};
// }
// 
// & input {
  // display: block;
  // width: 100%;
  // border: 1px solid ${props=>props.invalid ? 'red' : 'black'};
  // background:${props=>props.invalid ? 'red' : 'transparent'};
  // font: inherit;
  // line-height: 1.5rem;
  // padding: 0 0.25rem;
// }
// 
// & input:focus {
  // outline: none;
  // background: #fad0ec;
  // border-color: #8b005d;
// }`
const ItemInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
 const [isValid,setIsValid]=useState(true);
  const itemInputChangeHandler = event => {
    if(event.target.value.length>0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false);
      return;
    }
    props.onAddItem(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isValid ? 'invalid' :''}`}> */}
      {/* <FormControl className={`${!isValid && 'invalid'}`} > */}
      {/* <FormControl invalid = {!isValid}> */}
      <div className={`${styled['form-control']} ${!isValid && styled.invalid }`}>
        <label>Shopping Item</label>
        <input type="text" onChange={itemInputChangeHandler} />
        </div>
      {/* </FormControl> */}
      <Button type="submit">Add Item</Button>
    </form>
  );
};

export default ItemInput;
