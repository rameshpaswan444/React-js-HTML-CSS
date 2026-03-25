import {  NavLink } from "react-router";
import './Header.css';

function NavBar() {
  return (
    <div className="Header">
      <div>
        <NavLink className="link" to="/">
          Logo
        </NavLink>
      </div>
      <div>
        <ul>
          <li>
            <NavLink className="link" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/school">
              School
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/users">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/users/list">
              List
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
