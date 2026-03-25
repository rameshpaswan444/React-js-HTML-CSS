import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router";
function UserEdit() {

    const { id } = useParams();
    console.log("User ID:", id); // Log the user ID to verify it's being received correctly

    const [name, setName] = useState("");
      const [age, setAge] = useState("");
      const [email, setEmail] = useState("");
      const navigate = useNavigate();
  useEffect(() => {
  getUserData();

  },[]);
  const getUserData = async() => {
    const url = `http://localhost:3000/users/${id}`;
    let response = await fetch(url);
    response = await response.json();
   
    setName(response.name);
    setEmail(response.email);
    setAge(response.age);
   
}
const updateUser = async() => {
    const url = `http://localhost:3000/users/${id}`;
    let response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if(response)
      alert("User updated successfully");
    navigate("/");
   
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>Edit User</h1>
      <input type="text"value={name}onChange={(event)=>setName(event.target.value)} placeholder="Enter user name" />
        <br /> <br/>
        <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter user email" />
        <br /> <br/>
        <input type="text" value={age} onChange={(event)=>setAge(event.target.value)} placeholder="Enter Age" />
        <br /> <br/>
        <Button onClick={updateUser}>Update User</Button>   
       
    </div>
  )
}
export default UserEdit;