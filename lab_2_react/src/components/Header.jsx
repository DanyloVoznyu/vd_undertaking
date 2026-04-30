export default function Header({ theme, toggleTheme }) {
  const isLight = theme === "light";

  return (
    <header className={`relative rounded-xl p-8 mb-6 shadow-lg transition-all duration-500 
      ${isLight 
        ? "bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white" 
        : "bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-slate-200 border border-slate-700"
      }`}>
      
      <button 
        onClick={toggleTheme}
        className={`absolute top-6 right-6 px-4 py-2 rounded-lg text-xs font-semibold backdrop-blur-md transition-all border
          ${isLight 
            ? "bg-white/10 hover:bg-white/20 border-white/20 text-white" 
            : "bg-blue-500/10 hover:bg-blue-500/20 border-blue-400/30 text-blue-400"
          }`}
      >
        {isLight ? "Dark Mode" : "Light Mode"}
      </button>

      <h1 className="text-3xl font-bold mb-2 tracking-tight">
        Возний Данило Тарасович
      </h1>
      <p className={`text-lg mb-6 font-medium ${isLight ? "text-blue-100" : "text-blue-400"}`}>
        Початківець програміст
      </p>

      <div className="mt-4">
        <h2 className={`text-sm uppercase tracking-wider font-bold mb-3 pb-1 border-b w-fit
          ${isLight ? "border-blue-400/50 text-white" : "border-blue-500/50 text-slate-300"}`}>
          Контактна інформація
        </h2>
        <ul className={`space-y-2 text-sm ${isLight ? "text-blue-50/90" : "text-slate-400"}`}>
          <li className="flex items-center gap-2">
            <span className="opacity-70">Email:</span> 
            <span className="font-mono">danylo.voznyi.kb.2023@lpnu.ua</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="opacity-70">Телефон:</span> 
            <span>+380971606690</span>
          </li>
        </ul>
      </div>
    </header>
  );
}