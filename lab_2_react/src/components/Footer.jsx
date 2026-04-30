import { useEffect, useState } from 'react';

export default function Footer({ theme }) {
  const [systemInfo, setSystemInfo] = useState({ ua: '', platform: '' });
  const isLight = theme === 'light';

  useEffect(() => {
    const info = {
      ua: navigator.userAgent,
      platform: navigator.platform
    };

    localStorage.setItem('system_info', JSON.stringify(info));
    setSystemInfo(info);
  }, []);

  return (
    <footer className={`text-center mt-12 py-8 transition-colors duration-500 border-t 
      ${isLight ? "border-blue-100 text-[#1a2a40]" : "border-slate-800 text-slate-400"}`}>
      <p className="font-semibold mb-3">© 2026 Возний Данило Тарасович</p>
      
      <div className={`flex flex-col gap-1 text-xs font-mono opacity-60 max-w-2xl mx-auto px-4 break-all`}>
        <p>
          <span className="font-bold uppercase tracking-tighter mr-2">User Agent:</span> 
          {systemInfo.ua}
        </p>
        <p>
          <span className="font-bold uppercase tracking-tighter mr-2">Platform:</span> 
          {systemInfo.platform}
        </p>
      </div>
    </footer>
  );
}