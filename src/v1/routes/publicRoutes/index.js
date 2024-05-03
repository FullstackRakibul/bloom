import { Routes, Route } from "react-router-dom";
import HomaPage from "../../pages/Home";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomaPage />} />
    </Routes>
  );
};

export default PublicRoutes;
