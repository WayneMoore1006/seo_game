import React from 'react';
import { Search, Bell, ShoppingCart, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-outline/10">
      <nav className="max-w-screen-2xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <span className="text-2xl font-black tracking-tighter text-on-surface font-headline">Digital Curator</span>
          <div className="hidden md:flex items-center gap-8 font-headline text-sm font-medium">
            <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">Home</a>
            <a href="#" className="text-primary border-b-2 border-primary pb-1 font-bold">Browse</a>
            <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">Blog</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
            <input
              type="text"
              placeholder="Search curated titles..."
              className="bg-surface border-none rounded-full py-2 pl-10 pr-4 text-xs w-64 focus:ring-1 focus:ring-primary outline-none text-on-surface"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:bg-surface-bright p-2 rounded-full transition-colors text-primary">
              <Bell className="w-5 h-5" />
            </button>
            <button className="hover:bg-surface-bright p-2 rounded-full transition-colors text-primary">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-surface-bright overflow-hidden border border-outline/20 cursor-pointer">
              <img
                src="https://i.pravatar.cc/150?u=me"
                alt="Profile"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
