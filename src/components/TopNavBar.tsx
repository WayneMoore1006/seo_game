import React from 'react';
import { Link } from 'react-router-dom';
export const TopNavBar: React.FC = () => {


  return (
    <nav className="bg-[#0b0e15] dark:bg-[#0b0e15] fixed top-0 z-50 w-full mb-20 bg-opacity-95 backdrop-blur-sm">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-black tracking-tighter text-[#eff0fa] font-headline">四隻鳥遊戲推薦</Link>
        </div>
      </div>
    </nav>
  );
};
