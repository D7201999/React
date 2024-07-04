import { useState } from "react";
function Counter(){
    const [count,setCount]= useState(0);
    function Increment()
    {
        setCount(count+1);
    }
    function Decrement()
    {
        setCount(count-1);
    }
    function Reset(){
        setCount(0);
    }
    return(
        <>
        <p>Count:{count}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>

        </>
    );
    
   


}
export default Counter;