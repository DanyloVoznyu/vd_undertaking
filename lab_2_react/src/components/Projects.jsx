export default function Projects({ theme }) {
  const isLight = theme === "light";

  return (
    <section 
      className={`rounded-xl p-8 transition-all duration-500 shadow-md hover:-translate-y-1 
      ${isLight 
        ? "bg-white shadow-[0_4px_15px_rgba(30,58,138,0.1)] hover:shadow-[0_8px_25px_rgba(30,58,138,0.2)]" 
        : "bg-[#1e293b] shadow-[0_4px_15px_rgba(0,0,0,0.25)] border border-slate-700"
      }`}
    >
      <h2 className={`text-2xl font-semibold mb-4 border-b-2 pb-2 transition-colors duration-500
        ${isLight 
          ? "text-[#1a2a40] border-[#2563eb]" 
          : "text-[#e2e8f0] border-[#60a5fa]"
        }`}
      >
        Проєкти
      </h2>
      <ul className={`list-none space-y-3 transition-colors duration-500
        ${isLight ? "text-[#1a2a40]" : "text-[#cbd5e1]"}`}
      >
        <li className="flex items-start gap-3">
          <span className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${isLight ? "bg-[#2563eb]" : "bg-[#60a5fa]"}`}></span>
          <span>Telegram-боти для автоматизації простих завдань</span>
        </li>
        <li className="flex items-start gap-3">
          <span className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${isLight ? "bg-[#2563eb]" : "bg-[#60a5fa]"}`}></span>
          <span>Навчальні програми на Python</span>
        </li>
      </ul>
    </section>
  );
}