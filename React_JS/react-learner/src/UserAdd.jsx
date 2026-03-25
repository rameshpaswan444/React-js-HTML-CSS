import { useState } from "react";
import { useNavigate } from "react-router";
function UserAdd() {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const createUser = async() => {
   
    console.log(name, age, email);
    const url = "http://localhost:3000/users";
    
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ name, age, email }),     
    }); 
    response = await response.json();
    if(response)
      alert("User created successfully");
    navigate("/");
  }
 
  return (
    <div style={{textAlign:"center", color:"blue"}}>
      <h1>Add New User</h1>
      <br/>
      <input style={{border:"solid gray"}} type="text"onChange={(event)=>setName(event.target.value)} placeholder="Enter user name" />
      <br /> <br/>
      <input style={{border:"solid gray"}} type="text" onChange={(event)=>setAge(event.target.value)} placeholder="Enter Age" />
      <br /> <br/>  
      <input style={{border:"solid gray"}} type="email" onChange={(event)=>setEmail(event.target.value)} placeholder="Enter user email" />
      <br /> <br/>
     <button style={{border:"solid gray", backgroundColor:"lightblue"}} onClick={createUser}>Add User</button>
    </div>
  )
}
export default UserAdd;