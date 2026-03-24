import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { NAV_LINKS } from '../constants';

/**
 * @component TopNavBar
 * @description 全站共用的頂層導覽列。
 * 提供站內路由切換、全域搜尋（導向 Browse 頁面），以及購物車等使用者互動功能。
 */
export const TopNavBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  /**
   * 處理搜尋表單提交，跳轉至探索頁面並附帶 Query Parameter
   */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.success(`Searching for: ${searchQuery}`);
      navigate(`/browse?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const notifyFeature = (featureName: string) => {
    toast(`Feature '${featureName}' coming soon!`, { icon: '🚧' });
  };

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path || (path === '/' && location.pathname === '');
    if (isActive) {
      return "text-[#71caff] border-b-2 border-[#71caff] pb-1 font-bold font-headline tracking-tight text-sm";
    }
    return "text-[#a9abb4] hover:text-[#eff0fa] transition-colors duration-200 font-headline tracking-tight text-sm";
  };

  return (
    <nav className="bg-[#0b0e15] dark:bg-[#0b0e15] fixed top-0 z-50 w-full mb-20 bg-opacity-95 backdrop-blur-sm">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-black tracking-tighter text-[#eff0fa] font-headline">Digital Curator</Link>
          <div className="hidden md:flex gap-8 items-center">
            {NAV_LINKS.map(link => (
              <Link key={link.href} className={getLinkClass(link.href)} to={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <form onSubmit={handleSearch} className="hidden lg:flex items-center bg-surface-container-lowest rounded-full px-4 py-2 w-64 border border-outline-variant/15 focus-within:border-primary/50 transition-colors">
            <button type="submit" className="material-symbols-outlined text-on-surface-variant text-sm mr-2 hover:text-primary transition-colors">search</button>
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none text-xs focus:ring-0 text-on-surface p-0 w-full placeholder:text-on-surface-variant outline-none" 
              placeholder="Search curated library..." 
              type="text" 
            />
          </form>
          <div className="flex gap-4">
            <button onClick={() => notifyFeature('Notifications')} className="text-[#a9abb4] hover:bg-[#272c37] p-2 rounded-full transition-all duration-200 ease-out active:scale-90 flex items-center justify-center">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button onClick={() => notifyFeature('Shopping Cart')} className="text-[#a9abb4] hover:bg-[#272c37] p-2 rounded-full transition-all duration-200 ease-out active:scale-90 flex items-center justify-center">
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
            <div onClick={() => notifyFeature('Profile & Settings')} className="w-9 h-9 rounded-full overflow-hidden border border-outline-variant/30 cursor-pointer hover:border-primary/50 transition-colors">
              <img alt="User profile and settings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwW_6_BvDR7NPgR1p2iSJw0QabThIELnv1VQbM_L1Xt3WCaa__QrQnfaRsOZuiknwvZ-608SsGctpbZ48XcRJx0vbPmj0FSHfNXDBOWINemrKDIDvoQLGNscKj8IeI8jV21lG0aaGlp42biX_2v3X6boLZmM2G_s1LejpCea74MYUx5SUsAI46dj8Y3judT74X3o2VQHBk5SrlzieI1UFrqNBINI6UxuSn2TZ_kb5fC-X5o7Ao8Tc6CkdGCkJk7T6Oyja_q39pXWzg" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
