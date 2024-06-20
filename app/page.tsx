"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Header from "@/components/Header";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <main className="relative bg-[#E7EDF5] flex justify-center items-center flex-col overflow-hidden mx-auto px-5">
      <div className="max-w-7xl w-full">
        <Header/>
        <Hero />
        <Layout />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
