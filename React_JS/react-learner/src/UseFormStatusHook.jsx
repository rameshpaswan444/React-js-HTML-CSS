
import {useFormStatus} from "react-dom";
function UseformStatusHook() {

 async function handleSubmit(formData) {
    "use server";
    await new Promise((res) => setTimeout(res, 2000));
    }

    function CustomerForm(){
        const {pending}=useFormStatus();
        console.log(pending);
        return(
             <div>
                   

                <input type="text" placeholder="Enter your Name" />
                <input type="text" placeholder="Enter your Password" />
               <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>

            
            
            </div>

        )
           
        
    }
    return(
        <div>
         
            <h1>UseFormStaus</h1>
            <form action="handleSubmit">
                   <CustomerForm />

            </form>
        
            
        </div>
    )
}
export default UseformStatusHook;