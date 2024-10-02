import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      {/* <section className="w-full h-screen absolute ">
        <video className="w-full bg-[#030014] h-full" autoPlay muted loop>
          <source src="/images/cards-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </section> */}
      <Nav/>
      <Hero />
      <About />
      <Project />
    </>
  );
}
