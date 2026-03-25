import { useRef } from "react";
function UseRefHook() {

    const inputRef = useRef(null);

    const handleInput = ()=>{
       inputRef.current.focus();
       inputRef.current.style.color="red";
    }
  return (
    <div>
      <h1>UseRef Hook</h1>
      <input ref={inputRef} type="text" placeholder="Enter text" />
      <button onClick={handleInput}>Submit</button>
    </div>
  );
}
export default  UseRefHook;