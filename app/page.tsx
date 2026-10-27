"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import DotNavigation from "@/components/DotNavigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="relative flex flex-col items-center overflow-x-hidden w-full min-h-screen">
      <Navbar />
      <DotNavigation />

      <div className="w-full">
        <Hero />
        <About />
        <Skills />
        <RecentProjects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
