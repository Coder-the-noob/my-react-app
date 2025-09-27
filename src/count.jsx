import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleClick = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }
    return(
        <div style={{border: "2px solid yellow", margin: "10px", padding: "10px"}}>
            <h3>Count: {count} </h3>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}