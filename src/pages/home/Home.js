import React from "react";
import "./home.scss";
import { About } from "./components/about/About";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";

export const Home = () => {
  return (
    <>
      <div className="containerme">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};
