import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <div style={{ textAlign: "center", marginTop: "120px" }}>
      <Outlet />
    </div>
  );
}

export default PublicLayout;