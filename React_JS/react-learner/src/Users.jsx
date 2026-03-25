import { Link } from "react-router-dom";
function Users() {

    const userData = [
        { id: 1, name: "John Doe", email: "john.doe@example.com" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
        { id: 4, name: "Alice Brown", email: "alice.brown@example.com" }
    ];

    
  return (
    <div style={{textAlign:"center"}}>
      <h1>Users List:</h1>
      <hr />
      {
        userData.map((user) => (
          <div key={user.id}>
            <h4><Link to={"/users/" + user.id}>{user.name}</Link></h4>
            <p>{user.email}</p>
          </div>
        ))}
        <hr/>
         {
        userData.map((user) => (
          <div key={user.id}>
            <h4><Link to={"/users/" + user.name}>{user.name}</Link></h4>
            <p>{user.email}</p>
          </div>
        ))}
    </div>
  );
}   
export default Users;