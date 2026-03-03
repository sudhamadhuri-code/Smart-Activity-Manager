import { useState } from "react";
import API from "../api";

function Register() {
  const [user, setUser] = useState({
    id: "",
    emailId:"",
    name: "",
    password: "",
    role: "",
  });

  const handleRegister = async () => {
    try {
      await API.post("/api/auth/register", user);
      alert("Registered Successfully");
    } catch {
      alert("Error registering");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input placeholder="ID" onChange={(e) => setUser({ ...user, id: e.target.value })} />
       <input placeholder="EmailId" onChange={(e) => setUser({ ...user, emailId: e.target.value })} />
      <input placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <input placeholder="Role" onChange={(e) => setUser({ ...user, role: e.target.value })} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;