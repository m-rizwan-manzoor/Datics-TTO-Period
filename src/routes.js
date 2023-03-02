import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Pages/Auth";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";

function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
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
