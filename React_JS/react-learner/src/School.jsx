import { NavLink, Outlet } from "react-router";

function School() {
  return (
    <div className="school" style={{textAlign:"center"}}>
      <h1>College  Page</h1>
      <NavLink className="link" to="student">Student Page</NavLink>
      <NavLink className="link" to="department">Department Page</NavLink>
      <NavLink className="link" to="college">College Details</NavLink>
   
    <Outlet />
      </div>
    
  );
}
export default School;