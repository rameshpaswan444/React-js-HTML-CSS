import React, { Suspense,lazy, useState } from "react";
import Counter from "./Counter";
import Props from "./Props";
import College from "./College";
import User from "./User";
import Student from "./Student";
import Checkbox from "./Skills";
import Skills from "./Skills";
import RadioButt from "./RadioButt";
import Loop from "./Loop";
import ReuseComponent from "./ReuseComponent";
import Clock from "./Clock";
import Counter2 from "./Counter2";
import "./CSS/Style.css";
import UserProfile from "./UserProfile";
import styled from "styled-components";
import  Button  from "react-bootstrap/Button"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import UseRefHook from "./UseRefHook";
import ForwardRef from "./ForwardRef";
import UseformStatusHook from "./UseFormStatusHook";
import UseTransitionHook from "./useTransitionHook";
import DeriveState from "./DeriveState";
import UpdateStateInReact from "./UpdateStateInReact";
import UseActionStateHook from "./UseActionStateHook";
import useToggle from "./useToggle";
import SubjectContext from "./ContextData";
import RoutingPractise from "./RoutingPractise";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import NavBar from "./NavBar";
import GetData from "./GetData";
import ApiIntegration from "./ApiIntegration";
import ValidationInReact from "./ValidationInReact";
import UseReducerHook from "./UseReucerHook";
import LazyLoadingmain from "./LazyLoadingmain";
import ColormixerProject from "./ColormixerProject";







  // const [fruit, setFruit] = useState("Apple");

  // const handleFruit = () => {
  //   setFruit("Mango");
  // }
  // let userObj = {
  //   name :"Hari",
  //   age :20,
  //   city : "kathmandu"
  // }
  // let userOb2 = {
  //   name:"Gita",
  //   age: 23,
  //   city: "Butwal"
  // }
  // let college= ["Advance College", "Kec", "NCE","KCC","NCIT"]
  // const [value, setValue] =useState("Ramesh Paswan")
  // const [student, setStudent] = useState("");

  // const [name, setName] =useState("");
  // const [password, setPassword] =useState("");
  // const [email, setEmail] = useState("");

  // const [color, setColor] = useState('red');
  // const [count, setCount]= useState(0);
  // const [data, setData] = useState(0);

const Heading = styled.h1`
  color: Blue;
  font-size: 40px;
  text-align: center;
  margin-top: 20px;
  `

 const Buttonbtn = styled.button`
  
 width:120px;
 color: Green;
  font-size: 20px;
  border-radius: 5px;
  margin: 20px;
  padding: 10px;
 

  `

function App() {
  const[value, setToggle]=useToggle(true);
  const [subject, setSubject]=useState("");
  return (
 <div>
<ColormixerProject/>

{/* <LazyLoadingmain/> */}

 

{/* 
      <UseReducerHook /> */}
      {/* <ValidationInReact/> */}
      {/* <ApiIntegration /> */}
      {/* <GetData /> */}
      {/* <NavBar /> */}
      
      {/* <RoutingPractise /> */}
      {/* <h1 className="bg-red-700 text-3xl">Hello tailwind css</h1> */}
     
      {/* <div style={{backgroundColor:'yellow',padding:'10px'}}>
        <SubjectContext.Provider value={subject}> 
          <select  value={subject}onChange={(event)=>setSubject(event.target.value)}>
            <option value=""> Select Subject</option>
            <option value={"Science"}>Science</option>
            <option value={"Maths"}>Maths</option>
            <option value={"History"}>History</option>  
          
          </select>
         <h1>Context API</h1>
         <button onClick={()=>setSubject("")}>Clear Subject</button>
         <College/>
        </SubjectContext.Provider>
         
         

      </div> */}

     
     
      {/* <useToggle /> */}
      {/* <button onClick={()=>setToggle(!value)}>Toggle Heading</button>
      <button onClick={()=>setToggle(false)}>Hide Heading</button>
      <button onClick={()=>setToggle(true)}>Show Heading</button> */}
      {/* {
        value?<h1>Custom Hook in react js</h1>:null
      }
      <UseActionStateHook/> */}
      {/* <UpdateStateInReact />
      <DeriveState />
      <UseTransitionHook/>
      <UseformStatusHook />
      <ForwardRef />
      <UseRefHook /> */}
      
      {/* <Buttonbtn>Login</Buttonbtn  >
      <Buttonbtn>Signup</Buttonbtn  >
      <Button>click</Button> */}
      


{/* <Heading>Hello Ramesh</Heading> */}
     
  {/* <UserProfile /> */}
     <div className="heading">
       <h1>External css</h1>
       <div className="container">
         <div className="user-card">
           <img 
          className="img-style"
           src="https://media.istockphoto.com/id/2060009001/vector/avatar-user-profile-person-icon-profile-picture-for-social-media-profiles-icons-screensavers.jpg?s=612x612&w=0&k=20&c=onk7rmEoISSvHVlqc-SiBvcUr8ilCm2u9kcw3_Bm_SA="
           />
          <div className="text-wrap">
            <h3>Sunita Poudel</h3>
            <p>Software Engineer</p>
          </div>
        </div> 

         <div className="user-card">
          <img 
            className="img-style"
            src="https://media.istockphoto.com/id/2060009001/vector/avatar-user-profile-person-icon-profile-picture-for-social-media-profiles-icons-screensavers.jpg?s=612x612&w=0&k=20&c=onk7rmEoISSvHVlqc-SiBvcUr8ilCm2u9kcw3_Bm_SA="
          />
          <div className="text-wrap">
            <h3>Sunita Poudel</h3>
            <p>Software Engineer</p>
          </div>
        </div> 

        <div className="user-card">
          <img 
             className="img-style"
            src="https://media.istockphoto.com/id/2060009001/vector/avatar-user-profile-person-icon-profile-picture-for-social-media-profiles-icons-screensavers.jpg?s=612x612&w=0&k=20&c=onk7rmEoISSvHVlqc-SiBvcUr8ilCm2u9kcw3_Bm_SA="
          />
          <div className="text-wrap">
            <h3>Sunita Poudel</h3>
            <p>Software Engineer</p>
          </div>
        </div> 
         <div className="user-card">
          <img 
            className="img-style"
            src="https://media.istockphoto.com/id/2060009001/vector/avatar-user-profile-person-icon-profile-picture-for-social-media-profiles-icons-screensavers.jpg?s=612x612&w=0&k=20&c=onk7rmEoISSvHVlqc-SiBvcUr8ilCm2u9kcw3_Bm_SA="
         />
          <div className="text-wrap">
            <h3>Sunita Poudel</h3>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className="user-card">
           <img 
          className="img-style"
            src="https://media.istockphoto.com/id/2060009001/vector/avatar-user-profile-person-icon-profile-picture-for-social-media-profiles-icons-screensavers.jpg?s=612x612&w=0&k=20&c=onk7rmEoISSvHVlqc-SiBvcUr8ilCm2u9kcw3_Bm_SA="
          />
          <div className="text-wrap">
            <h3>Sunita Poudel</h3>
            <p>Software Engineer</p>
          </div>
        </div>
         <div className="user-card">
         <img 
           className="img-style"
            src="https://media.istockphoto.com/id/2060009001/vector/avatar-user-profile-person-icon-profile-picture-for-social-media-profiles-icons-screensavers.jpg?s=612x612&w=0&k=20&c=onk7rmEoISSvHVlqc-SiBvcUr8ilCm2u9kcw3_Bm_SA="
          />
          <div className="text-wrap">
            <h3>Sunita Poudel</h3>
            <p>Software Engineer</p>
          </div>
        </div>
      </div>

      {/* //  <Counter2  count={count} data = {data}/>
      // <button onClick={()=>setCount(count+1)}>count</button>
      // <button onClick={()=>setData(data+1)}>data</button>  */}
      {/* <Skills />
      <RadioButt />
      <Loop /> */}
      {/* <ReuseComponent /> */}
      {/* <User/> */}
      {/* <select onChange={(event)=>setColor(event.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
        <option value={"green"}>Green</option>
      </select> */}

      {/* 
      <Clock  color = {color}/> */}
      {/* <form action="" method="get">
        <h1>Student Form</h1>
        <input type="text" value={name}onChange={(event)=>setName(event.target.value)} placeholder="Enter name" />
        <br /> <br />
         <input type="password"value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter Password" />
        <br /> <br />
         <input type="text" onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email" />
        <br /> <br />
        <button >Submit</button>
        <button onClick={()=>{setEmail(""); setName("");setPassword("")}}>Clear</button>
        <h2>{name}</h2>
        <h2>{password}</h2>
        <h2>{email}</h2>

      </form> */}
      {/* <Student /> */}
      {/* <input type="text" value={student} onChange={(event)=>setStudent(event.target.value)} placeholder="Enter the Name of Student"/> */}

      {/* <button onClick={()=>setStudent("")}>Clear Student</button>
<h1>{student}</h1> */}
      {/* <input type="text" value={value}onChange={(event)=>setValue(event.target.value)} placeholder="Enter user name" />
      <h1>{value}</h1> */}
      {/* <button onClick={()=>setValue("")}>clear value</button> */}
      {/* <Counter />
      <User name ="Ramesh" /> */}
      {/* <User /> */}
      {/* <College name={college[1]}/> */}
      {/* <h1>{fruit}</h1> */}
      {/* <button onClick={handleFruit}>change fruit</button> */}
      {/* <Props user = {userObj} />
      <Props user = {userOb2} /> */}
     </div>
    </div>
  );
}
export default App;
