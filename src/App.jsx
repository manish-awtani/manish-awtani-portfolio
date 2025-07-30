// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Hero from './components/Hero';
import MainLayout from './layouts/MainLayout';
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Blogs from "./pages/Blogs";
import Experience from "./pages/Experience";
import CursorTrail from "./components/CursorTrail";
import BlogPost from "./pages/BlogPost";
import AppRoutes from "../routes/AppRoutes";

function App() {

  
    {/* <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-3xl font-bold">Hello, Manish Awtani 👋</h1>
      <h2 className="text-4xl font-semibold font-sans">
        Welcome to My Portfolio
      </h2>
    </div> */}
  return (
    // <MainLayout>
    //   <Hero />
    // </MainLayout>
    <Router>
      {/* <CursorTrail /> */}
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  );
}

export default App
