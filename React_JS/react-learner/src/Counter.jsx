import { useState } from "react";
const Counter=()=>{
    const[count, setCount]=useState(0);
    return(
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Counter</button>
        {
            count==0? <h1>Condition 1?</h1>:count==1?<h1>Condition 2?</h1>:null
        }

    </div>
)
}
    // const [count, setCount] = useState(0);
    // const [rcount, setRcount] = useState(20);

    // const [display, setDisplay] = useState(true);

//     return(
//         <div>
//         //     {
//         //         display? <h1>Ramesh</h1>:null
//         //     }
//         //     <button onClick={()=>setDisplay(!display)}>Toggle</button>
//         //     <h1>Counter:{count}</h1>
//         //     <button onClick={()=>setCount(count+1)}>Update Counter</button>
//         //     <h1>Reverse Counter:{rcount}</h1>
//         //     <button onClick={()=>setRcount(rcount-1)}>Update Reverse Counter</button>
//         </div>
//     )
// }

export default Counter;