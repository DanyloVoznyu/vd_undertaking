export default function Header({ theme, toggleTheme }) {
  const isLight = theme === "light";

  return (
    <header className={`relative rounded-xl p-8 mb-6 shadow-lg transition-all duration-500 
      ${isLight 
        ? "bg-gradient-to-br from-[#14532d] to-[#22c55e] text-white" 
        : "bg-gradient-to-br from-[#052e16] to-[#14532d] text-[#d1fae5] border border-[#14532d]"
      }`}>
      
      <button 
        onClick={toggleTheme}
        className={`absolute top-6 right-6 px-4 py-2 rounded-lg text-xs font-semibold backdrop-blur-md transition-all border
          ${isLight 
            ? "bg-white/10 hover:bg-white/20 border-white/20 text-white" 
            : "bg-[#4ade80]/10 hover:bg-[#4ade80]/20 border-[#4ade80]/30 text-[#4ade80]"
          }`}
      >
        {isLight ? "Dark Mode" : "Light Mode"}
      </button>

      <h1 className="text-3xl font-bold mb-2 tracking-tight text-white">
        Возний Данило Тарасович
      </h1>
      <p className={`text-lg mb-6 font-medium ${isLight ? "text-[#d1fae5]/90" : "text-[#4ade80]"}`}>
        Початківець програміст
      </p>

      <div className="mt-4">
        <h2 className={`text-sm uppercase tracking-wider font-bold mb-3 pb-1 border-b w-fit
          ${isLight ? "border-[#bbf7d0]/50 text-white" : "border-[#14532d] text-[#d1fae5]"}`}>
          Контактна інформація
        </h2>
        <ul className={`space-y-2 text-sm ${isLight ? "text-white/80" : "text-[#d1fae5]/70"}`}>
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