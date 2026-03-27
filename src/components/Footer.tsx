import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0e15] dark:bg-[#0b0e15] border-t border-[#161a22] mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 gap-6 max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-4">
          <span className="text-lg font-bold text-[#eff0fa] font-headline">四隻鳥的SEO作業</span>
          <p className="font-['Inter'] text-xs text-[#a9abb4] max-w-xs">歡迎找我們打遊戲</p>
        </div>
        <div className="flex flex-col items-end gap-4">
          <p className="font-['Inter'] text-xs text-[#a9abb4]">© 2026 四隻鳥的SEO作業. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
