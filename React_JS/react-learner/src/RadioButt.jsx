import { useState } from "react";

function RadioButt(){

    const [gender, setGender] = useState("female");
    const [ city, setCity] =useState("kathmandu");

    return(
        <div>
            <h1>Select gender: {gender}</h1>
            <input type="radio"onChange={(event)=>setGender(event.target.value)} name="gender"  id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <br /><br/>

            <h2>Select City</h2>
            <select onChange={(event)=>setCity(event.target.value)}>
                <option value= "kathmandu">Kathmandu</option>
            <option value= "butwal">Butwal</option>
            <option value= "pokhara">Pokhara</option>

            </select>
            <h2>selected city: {city}</h2>
            
            
        </div>
    )
}
export default RadioButt;