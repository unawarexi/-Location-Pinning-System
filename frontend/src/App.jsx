import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <>
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </>
    </div>
  );
};

export default App;
