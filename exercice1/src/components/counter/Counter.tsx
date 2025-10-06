import { useState } from "react";
import "./Counter.css";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Le compte est de : {count}</p>
            <button onClick={() => setCount((count) => count + 1)}>+1</button>
            <button onClick={() => setCount((count) => count - 1)}>-1</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
        
    );
}

export default Counter;
