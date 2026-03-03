import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={styles.nav}>
      <div>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/activities" style={styles.link}>Activities</Link>
      </div>
      <button onClick={logout} style={styles.logout}>Logout</button>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#acddfc",
    color: "white",
  },
  link: {
    marginRight: "20px",
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "bold"
  
  },
  logout: {
    background: "white",
    color: "#2563eb",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold"

  },
};

export default Navbar;