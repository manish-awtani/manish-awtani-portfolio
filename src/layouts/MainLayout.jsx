import React from 'react'
import ThemeToggle from '../components/ThemeToggle';
import Header from '../components/Header';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#0f0f0f] dark:text-white transition-colors">
      {/* <header className="p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Manish Awtani</h1>
        <ThemeToggle />
      </header> */}
        <Header />
      <main className="p-6">{children}</main>
    </div>
  );
}

export default MainLayout;