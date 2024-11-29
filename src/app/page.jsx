import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Nav from "./components/Nav";
import Scene from "./components/Earth";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
      {/* <Scene /> */}
    </>
  );
}
