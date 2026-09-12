import { useState } from "react";
import './Counter.css';
function Counter(){
    const [count, setCount] = useState(0);
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    const increment= ()=> setCount(count + 1);
    return(
        <div className="counter">
           <button className="counter__decrement" onClick={decrement}>-</button>
           <div className="counter__value">{count}</div>
           <button className="counter__increment" onClick={increment}>+</button>
        </div>
    )
}
export default Counter;