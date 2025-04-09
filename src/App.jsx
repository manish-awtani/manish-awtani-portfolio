// import { useState } from 'react'

import './App.css'
import Hero from './components/Hero';
import MainLayout from './layouts/MainLayout';

function App() {

  
    {/* <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-3xl font-bold">Hello, Manish Awtani 👋</h1>
      <h2 className="text-4xl font-semibold font-sans">
        Welcome to My Portfolio
      </h2>
    </div> */}
  return (
      <MainLayout>
        <Hero />
      </MainLayout>
    
  );
}

export default App
