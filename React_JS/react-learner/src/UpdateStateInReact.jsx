import { useState } from "react";

function UpdateStateInReact() {
    const [data, setData]=useState({
        name: "Ramesh",
        address: {
            city: "kathmandu",
            street: 22      
          }
    });

    const handleData = (val) => {
        data.name =  val
        setData({...data})  
     }
     const handleCity = (val) => {
        data.address.city = val
        setData({...data,address:{...data.address}})
     }

    return(
        <div>
            <h1>Update State in React</h1>
            <input onChange={(e) => handleData(e.target.value)} type="text" placeholder="Enter data"/>
            <button onClick={() => handleData("Updated Name")}>Update</button>
            <h4>Name: {data.name}</h4>
            <input onChange={(e) => handleCity(e.target.value)} type="text" placeholder="Enter city"/>
            <button onClick={() => handleCity("Updated City")}>Update City</button>
            <h4>City: {data.address.city}</h4>
        </div>
    )

}
export default UpdateStateInReact;
