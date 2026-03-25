import { Link, Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Users from "./Users";
import UserDetails from "./UserDetails";
import UserList from "./UserList";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";
import School from "./School";
import StudentPage from "./StudentPage";
import DepartmentPage from "./DepartmentPage";
import CollegeDetails from "./CollegeDetails";
import { Outlet } from "react-router";
function RoutingPractise() {
  return (
    <>
      {/* <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/login">Login</Link>   */}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/list?" element={<Users />} />
        <Route path="/users/:id/:name?" element={<UserDetails />} />
        {/* <Route path='/users/list?' element={<UserList />} /> */}
       
        {/* <Route path="/*" element={<PageNotFound />} /> */}
          <Route path="school" element={<School />}>
          <Route path="student" element={<StudentPage />} />
          <Route path="department" element={<DepartmentPage />} />
          <Route path="college" element={<CollegeDetails />} />
            
        </Route>
          
      </Routes>
    </>
  );
}
export default RoutingPractise;
