import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Header.css"
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";


function UserList() {

    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        getUserData();
    },[])


    const getUserData= async()=>{
        const url = "http://localhost:3000/users";
        let response =await fetch(url);
        response = await response.json();
        console.log(response);
        setUserData(response);
    }
     const deleteUser = async(id) => {
    const url = `http://localhost:3000/users/${id}`;
    let response = await fetch(url, {           
      method: "DELETE",
    }); 
    response = await response.json();
    if(response)
      alert("User deleted successfully");
    getUserData();
  }
  const EditUser = (id) => {
    navigate(`/user-edit/${id}`);
  }
 

  return (
    <div>
      {/* <h1>Api  Integration</h1> */}
      <ul className="user-list user-list-head">
        <li>Name</li>
        <li>Email</li>
        <li>Age</li>
        <li>Action</li>
      </ul>
      {
        userData && userData.map((user)=>{
            return(
                <div key={user.id}  className="user-list">
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.age}</li>
                   <div style={{display:"flex",width:"100px"}}>
                     <li style={{marginRight:"5px"}}>
                        <Button onClick={()=>deleteUser(user.id)}>Delete</Button>
                    </li>
                    <li><Button onClick={()=>EditUser(user.id)}>Edit</Button></li>
                   </div>
                </div>
            )
        })
      }
    </div>
  )
}
export default UserList;