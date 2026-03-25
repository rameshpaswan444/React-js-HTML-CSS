import { useRef } from "react";
import User from "./User";
import UserInput from "./UserInput";

function ForwardRef(){

    const inputRef = useRef(null);
    const updateRef=()=>{
        inputRef.current.value=100;
        
    }

    return(
        <div>
            <UserInput ref={inputRef} />
            <h1>Forward ref</h1>
           
            <button onClick={updateRef}>Update InputFiled</button>
        </div>
    )
}
export default ForwardRef;