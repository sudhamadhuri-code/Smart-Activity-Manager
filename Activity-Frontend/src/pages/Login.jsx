import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  const [loginData, setLoginData] = useState({
    emailId: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    emailId: "",
    password: "",
    role: "USER",
  });

  const navigate = useNavigate();

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault(); // prevent page refresh
    try {
      const res = await API.post("/api/auth/login", loginData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("emailId", loginData.emailId);

      setLoginData({ emailId: "", password: "" }); // clear fields
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  // REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/api/auth/register", registerData);
      alert("User created successfully!");
      setIsRegister(false);
      setRegisterData({
        name: "",
        emailId: "",
        password: "",
        role: "USER",
      });
    } catch {
      alert("User creation failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>{isRegister ? "Create Account" : "Login"}</h2>

        {!isRegister ? (
          <form onSubmit={handleLogin} autoComplete="off">
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="new-email"
              value={loginData.emailId}
              onChange={(e) =>
                setLoginData({ ...loginData, emailId: e.target.value })
              }
            />

            <input
              type="password"
              style={styles.input}
              name="password"
              placeholder="Password"
              autoComplete="new-password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />

            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister} autoComplete="off">
            <input
              style={styles.input}
              placeholder="Username"
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
            />

            <input
              style={styles.input}
              type="email"
              placeholder="Email"
              autoComplete="new-email"
              value={registerData.emailId}
              onChange={(e) =>
                setRegisterData({ ...registerData, emailId: e.target.value })
              }
            />

            <input
              type="password"
              style={styles.input}
              placeholder="Password"
              autoComplete="new-password"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
            />

            <select
              style={styles.input}
              value={registerData.role}
              onChange={(e) =>
                setRegisterData({ ...registerData, role: e.target.value })
              }
            >
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>

            <button type="submit" style={styles.button}>
              Create Account
            </button>
          </form>
        )}

        <p style={{ marginTop: "15px" }}>
          {isRegister ? "Already have an account?" : "Don't have an account?"}
          <span
            style={styles.toggle}
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? " Login" : " Create one"}
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f5f7fa",
  },
  card: {
    width: "350px",
    padding: "30px",
    borderRadius: "10px",
    background: "#acddfc",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
    border: "none",
    borderRadius: "5px",
    background: "white",
    cursor: "pointer",
    color: "#2563eb",
    fontWeight: "bold",
  },
  toggle: {
    color: "#2563eb",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Login;