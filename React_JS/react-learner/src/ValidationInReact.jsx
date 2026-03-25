// 
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useActionState } from "react";

function ValidationInReact() {

  const handleLogin = (prevData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");

    if (!name || name.length < 5) {
      return { error: "Name must be at least 5 characters long" };
    } 
    else if (!password || password.length < 8) {
      return { error: "Password must be at least 8 characters long" };
    } 
    else {
      return { message: "Login successful" };
    }
  };

  const [data, action, pending] = useActionState(handleLogin, {});

  return (
    <div>
      <h1>Validation in React</h1>

      {data?.message && <span>{data.message}</span>}
      {data?.error && <span style={{ color: "red" }}>{data.error}</span>}

      <br />

      <form action={action}>
        <input type="text" name="name" placeholder="Enter user name" />
        <br /><br />

        <input type="text" name="password" placeholder="Enter user Password" />
        <br /><br />

        <Button  type = "submit" disabled={pending}>
          {pending ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}

export default ValidationInReact;