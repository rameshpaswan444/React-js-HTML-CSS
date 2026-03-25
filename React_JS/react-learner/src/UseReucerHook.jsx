import { useReducer } from "react";

function UseReducerHook() {

    const emptyData={
        firstName:"",
        lastName:"",
        email:"",
        age:"",
        address:"",
        password:""
    }
    const reducer=(state,action)=>{
     return{
        ...state,
        [action.type]:action.val
     }
        }
    const [state,dispatch]=useReducer(reducer,emptyData);
  return (
    <div>
      <h1>Use Reducer Hook</h1>
      <br />
      <form>
        <input type="text"onChange={(event)=>dispatch({val:event.target.value, type:"firstName"})} placeholder="Enter first name" />
        <br /> <br />
        <input type="text"onChange={(event)=>dispatch({val:event.target.value, type:"lastName"})} placeholder="Enter last name" />
        <br /> <br />
        <input type="email"onChange={(event)=>dispatch({val:event.target.value, type:"email"})} placeholder="Enter email" />
        <br /> <br />
        <input type="number"onChange={(event)=>dispatch({val:event.target.value, type:"age"})} placeholder="Enter age" />
        <br /> <br />
        <input type="text"onChange={(event)=>dispatch({val:event.target.value, type:"address"})} placeholder="Enter address" />
        <br /> <br />
        <input type="password"onChange={(event)=>dispatch({val:event.target.value, type:"password"})} placeholder="Enter Password" />  
            <br /> <br />
            <ul>
        <li>Name: {state.firstName} {state.lastName}</li>
        <li>Email: {state.email}</li>
        <li>Age: {state.age}</li>
        <li>Address: {state.address}</li>
        <li>Password: {state.password}</li>
      </ul>
        <button onClick={()=>console.log(state)}>Submit</button>
      </form>
      
    </div>
  )
}
export default UseReducerHook;