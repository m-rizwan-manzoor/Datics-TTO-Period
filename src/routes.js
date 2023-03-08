import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Pages/Auth";
import FAQsDetails from "./Pages/FAQsDetails";
import FAQsPage from "./Pages/FAQsPage";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";

function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/faqs/:id" element={<FAQsDetails />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </AuthProvider>
  );
}

export default AppRoutes;
