import { Link, useParams } from "react-router";

function UserDetails() {
    const paramData = useParams();
    console.log(paramData.id);
  return (
    <div>
      <h1>User Details</h1>
      <h3>User Id is : {paramData.id}</h3>
      <h5><Link to="/users">Back to Users</Link></h5>
    </div>
  );
}
export default UserDetails;