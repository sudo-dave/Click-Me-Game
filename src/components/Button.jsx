import React, { useState } from 'react'
import Label from './Label';
const Button = () =>{
  const [count,setCount] = useState(0);
  
  const handleClick = () =>{
    setCount(count + 1);
  }
  return(<div>
    <Label count={count}/>
    <button onClick={handleClick}> 
    click me
  </button>
    </div>);
};
export default Button
