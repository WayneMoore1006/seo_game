import React from 'react';

export const TopNavBar: React.FC = () => {
  return (
    <nav className="bg-[#0b0e15] dark:bg-[#0b0e15] fixed top-0 z-50 w-full mb-20 bg-opacity-95 backdrop-blur-sm">
      <div className="flex justify-between items-center w-full py-4 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <a href="/steam-best-games/index.html" className="text-2xl font-black tracking-tighter text-[#eff0fa] font-headline">四隻鳥遊戲推薦</a>
        </div>
      </div>
    </nav>
  );
};
