import React, { useState } from 'react';
import toast from 'react-hot-toast';

/**
 * @component NewsletterBox
 * @description 新聞訂閱區塊元件，提供使用者輸入 Email 並訂閱週報的功能。
 * 遵循單一職責原則（SRP），將訂閱邏輯與 UI 完全隔離於頁面組件之外。
 */
export const NewsletterBox: React.FC = () => {
  const [email, setEmail] = useState('');

  /**
   * 處理提交訂閱表單事件
   * @param {React.FormEvent} e - 原生表單提交事件
   */
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Successfully subscribed to Weekly Digest!');
    setEmail('');
  };

  return (
    <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5 shadow-2xl shadow-primary/5 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <h3 className="font-headline text-lg font-bold mb-3">Weekly Digest</h3>
        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
          每週五收到最棒的遊戲新聞與深度報導，直接發送到您的信箱。
        </p>
        <form onSubmit={handleSubscribe} className="space-y-3">
          <input 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-md py-2 px-4 text-sm focus:ring-1 focus:ring-primary outline-none" 
            placeholder="Your email address" 
            type="email"
          />
          <button type="submit" className="w-full primary-gradient text-on-primary font-bold py-2 rounded-md text-sm active:scale-95 transition-transform">
            Subscribe Now
          </button>
        </form>
      </div>
      <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-primary/10 text-[100px] -rotate-12">mail</span>
    </div>
  );
};
