import { use, useActionState } from "react";

function UseActionStateHook() {
 

  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // console.log("Form submitted", name, password);
    if (name && password) {
      return { message: "Data submitted successfully",name,password };
    } else {
      return { error: "Please fill in all fields",name, password };
    }
  };
   const [data,action,pending] = useActionState(handleSubmit, undefined);

  return (
    <div>
      <h1>Use Action State Hook</h1>
      <form action={action}>
        <input defaultValue={data?.name} type="text" placeholder="Enter your name" name="name"/>
        <br /> <br />
        <input defaultValue={data?.password} type="password" placeholder="Enter pasword" name="password"/>
        <br /> <br />
        <button disabled={pending}>submit</button>
        {
            data?.error && <span style={{color:"red"}}>{data?.error}</span>}
            {
            data?.message && <span style={{color:"green"}}>{data?.message}</span>
        }
        
      </form>
      <h3>Name: {data?.name}</h3>
      <h3>Password: {data?.password}</h3>
    </div>
  );
}
export default UseActionStateHook;
