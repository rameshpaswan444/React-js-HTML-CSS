import { use, useEffect } from "react";

const Counter2 = ({count, data})=>{

    const handleCounter = ()=>{
        console.log("Counter2 function called");
    }
    useEffect(()=>{

         handleCounter();
    }, [])
    const handleData=()=>{
        console.log("Data function called");
    }

    useEffect(()=>{
        handleData();
    },[data])
   
   

    return(
        <div>
            <h1>Counter value: {count}</h1>
            <h1>Data value: {data}</h1>
        </div>
    )
}
export default Counter2;