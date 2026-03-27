import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-15W88FSNS6';

/**
 * @component GoogleAnalytics
 * @description 模組化的 Google Analytics 追蹤組件。
 * 負責動態載入 gtag.js 並在路由變更時發送 page_view 事件。
 */
export const GoogleAnalytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. 動態載入腳本
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // 2. 初始化 gtag
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(inlineScript);

    return () => {
      // 移除腳本（選用，通常 SPA 保持載入即可）
      document.head.removeChild(script);
      document.head.removeChild(inlineScript);
    };
  }, []);

  // 3. 路由變更時發送追蹤資料
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.hash,
        page_title: document.title,
      });
    }
  }, [location]);

  return null; // 此組件僅負責邏輯，不渲染 UI
};

// 為 window 對象添加 gtag 類型定義
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
