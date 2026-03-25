import { useState } from "react";

function DeriveState() {

    const [users, setUsers]=useState([]);

    const [user, setuser] = useState("");

    const handleUsers =()=>{
        setUsers([...users, user])
    }
    console.log(users);

    return(
        <div>
            <h1> Total Users: {users.length} </h1>
            <h1>Last User: {users[users.length-1] || "None"}</h1>
            <input type="text" onChange={(event)=>setuser(event.target.value)} placeholder="Enter User"/>
            <button onClick={handleUsers}>Add User</button>
            {
                users.map((item, index)=>{
                    return <h4 key={index}>{item}</h4>
                })
            }
        </div>
    )
}
export default DeriveState;