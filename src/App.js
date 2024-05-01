import React from "react";
import { Button, ConfigProvider, Space } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModulesRoutes from "./v1/routes/modules";

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: "#ff5f20",
        borderRadius: 2,

        // Alias Token
        colorBgContainer: "#F3F8FF",
      },
    }}
  >
    <Router>
      <Routes>
        <Route path="/*" element={<ModulesRoutes />} />
        {/* Other routes, e.g., dynamicRoutes */}
      </Routes>
    </Router>
  </ConfigProvider>
);

export default App;
