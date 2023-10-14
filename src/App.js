import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { Navigation } from "./layouts/Navigation";

export const App = () => {
  return (
    <>
      <div className="bg-gray text-light">
        <Navigation />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};
