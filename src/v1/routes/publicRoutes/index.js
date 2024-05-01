import { Routes, Route } from "react-router-dom";
import Overview from "../../pages/dashboard/Overview";
import Settings from "../../pages/dashboard/Settings";
import HomaPage from "../../pages/Home";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomaPage />} />
    </Routes>
  );
};

export default PublicRoutes;
