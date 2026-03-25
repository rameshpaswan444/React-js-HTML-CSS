import { useEffect, useState } from "react";
import "./Header.css"
import UserAdd from "./UserAdd";
import UserList from "./UserList";
import { NavLink, Route, Routes } from "react-router";
import "./App.css"
import UserEdit from "./UserEdit";

function ApiIntegration() {

    // const [userData, setUserData] = useState([]);

    // useEffect(()=>{
    //     getUserData();
    // },[])


    // const getUserData= async()=>{
    //     const url = "http://localhost:3000/users";
    //     let response =await fetch(url);
    //     response = await response.json();
    //     console.log(response);
    //     setUserData(response);
    // }
  return (
    <div>
      <ul className="nav-list">
        <li>
          <NavLink to="/"> List</NavLink>
          <li>

            <NavLink to="/user-add">Add </NavLink>
          </li>
          
        </li>
      </ul>
    
     
      <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="/user-add" element={<UserAdd />} />
        <Route path="/user-edit/:id" element={<UserEdit />} />
      </Routes>
      
      {/* <h1>Api  Integration</h1>
      <ul className="user-list user-list-head">
        <li>Name</li>
        <li>Email</li>
        <li>Age</li>
      </ul>
      {
        userData && userData.map((user)=>{
            return(
                <div key={user.id}  className="user-list">
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.age}</li>
                </div>
            )
        })
      } */}
    </div>
  )
}
export default ApiIntegration;