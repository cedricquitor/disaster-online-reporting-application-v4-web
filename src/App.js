import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Evacuation from "./pages/evacuation";
import Reports from "./pages/reports";
import Map from "./pages/map";
import Unauthorized from "./pages/unauthorized";
import Sandbox from "./pages/sandbox";
import NotFound from "./pages/notfound";

// React Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Menu from "./pages/menu";
import ProtectedRoute from "./helpers/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        />
        <Route
          path="/evacuation"
          element={
            <ProtectedRoute>
              <Evacuation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/map"
          element={
            <ProtectedRoute>
              <Map />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mobile"
          element={
            <ProtectedRoute>
              <Unauthorized />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sandbox"
          element={
            <ProtectedRoute>
              <Sandbox />
            </ProtectedRoute>
          }
        />
        {/* When no other routes match */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
