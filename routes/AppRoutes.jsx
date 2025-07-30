// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../src/components/Hero";
import Projects from "../src/pages/Projects";
import AboutMe from "../src/pages/AboutMe";
import Blogs from "../src/pages/Blogs";
import Experience from "../src/pages/Experience";
import BlogPost from "../src/pages/BlogPost";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
};

export default AppRoutes;
