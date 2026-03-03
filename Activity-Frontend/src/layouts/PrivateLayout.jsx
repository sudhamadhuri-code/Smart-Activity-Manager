import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function PrivateLayout() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
        <Outlet />
      </div>
    </>
  );
}

export default PrivateLayout;