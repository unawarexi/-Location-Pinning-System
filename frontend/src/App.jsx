import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Customers, CreateCustomer, LandingPage } from "./Pages/ExportPages";
import MainLayout from "./layout/MainLayout";
import { GetStarted } from "./container/ExportContainer";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <div className="max-w-7xl mx-auto">
        <>
          <BrowserRouter>
            <MainLayout>
              <Routes>
                <Route path="/auth" element={<GetStarted />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/create" element={<CreateCustomer />} />
              </Routes>
            </MainLayout>
          </BrowserRouter>
        </>
      </div>
    </AuthProvider>
  );
};

export default App;
