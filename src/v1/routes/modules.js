// routes/modules.js
import { Routes, Route } from "react-router-dom";
import AuthRoutes from "./authRoutes/authRoutes";
import GuestRoutes from "./guestRoutes/guestRoutes";
import PublicRoutes from "./publicRoutes";

const ModulesRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<PublicRoutes />} />
      <Route path="/guest/*" element={<GuestRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
    </Routes>
  );
};

export default ModulesRoutes;
