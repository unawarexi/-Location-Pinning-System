import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Customers,
  CreateCustomer,
  LandingPage,
  CustomerDetails,
  UpdateCustomer,
} from "./Pages/ExportPages";
import MainLayout from "./layout/MainLayout";
import { GetStarted } from "./container/ExportContainer";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <div className="lg:max-w-7xl md:max-w-7xl max-w-4xl mx-auto">
        <>
          <BrowserRouter>
            <MainLayout>
              <Routes>
                <Route path="/" element={<GetStarted />} />
                <Route path="/home" element={<LandingPage />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/create" element={<CreateCustomer />} />
                <Route path="/customer/:id" element={<CustomerDetails />} />
                <Route path="/update/:id" element={<UpdateCustomer />} />
              </Routes>
            </MainLayout>
          </BrowserRouter>
        </>
      </div>
    </AuthProvider>
  );
};

export default App;
