import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Activities from "./pages/Activities";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Login />} />
        </Route>

        <Route element={
          <ProtectedRoute>
            <PrivateLayout />
          </ProtectedRoute>
        }>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/activities" element={<Activities />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;