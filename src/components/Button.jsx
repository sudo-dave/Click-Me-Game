import React, { useEffect, useState } from 'react'
import Label from './Label';
const Button = () =>{
  const [count, setCount] = useState(parseInt(sessionStorage.getItem("count")) || 0);

  useEffect(()=>{
    sessionStorage.setItem("count",count.toString());
  },[count]);

  
  const handleClick = () =>{
    setCount(count + 1);
  }
  return(<div>
    <Label count={count}/>
    <button onClick={handleClick}> 
    click me
  </button>
  <div className='container'>
    <table border="2">
        <tr>
            <td>Location : Clicks</td>
        </tr>
        {/* <tr>
            <td>Row 1, Column 1</td>
        </tr> */}
    </table>
    </div>
    </div>);
};
export default Button
