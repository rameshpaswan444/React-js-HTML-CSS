import { useTransition } from "react";

function UseTransitionHook() {

    const [pending, startTransition]=useTransition();
    const handleButton =()=>{
        startTransition(async()=>{
      await new Promise((res)=>setTimeout(res,2000));
    })
}

    return(
        <div>
            <h1>useTransition Hook</h1>
            <button disabled={pending} onClick={handleButton}>Click me</button>
        </div>
    )

}
export default UseTransitionHook;