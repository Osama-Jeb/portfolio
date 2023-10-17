import React from "react";
import "./home.scss";
import { About } from "./components/about/About";
import { Hero } from "./components/hero/Hero";

export const Home = () => {
  return (
    <>
      <div className="containerme">
        <Hero />
        <About />
      </div>
    </>
  );
};
