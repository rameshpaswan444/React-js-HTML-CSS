import {useEffect,useState } from "react";

function GetData() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        
        getUserData();
    },[])
    async function getUserData(){

        const url = "https://dummyjson.com/users";
        let response = await fetch(url);
        response = await response.json();
     
        setUserData(response.users);
    }
    console.log(userData);
    return(
        <div>
            <h1>Get Data</h1>

           {
           
  userData && userData.map((user) => {
    return (
  <div>
    <h1>Get Data</h1>

    {userData.map((user) => (
      <div key={user.id} style={{ marginBottom: "20px" }}>
        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    ))}
  </div>
);
  })
}
        </div>
    )
}
export default GetData;