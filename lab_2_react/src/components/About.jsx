export default function About({ theme }) {
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
        Про себе
      </h2>
      <p className={`leading-relaxed text-lg transition-colors duration-500
        ${isLight ? "text-[#1a2a40]" : "text-[#cbd5e1]"}`}
      >
        Мотивований студент, який цікавиться програмуванням та сучасними
        технологіями. Маю базові знання у кількох мовах програмування та
        досвід створення невеликих проєктів. Постійно розвиваю свої технічні
        навички та прагну отримати практичний досвід у сфері розробки
        програмного забезпечення.
      </p>
    </section>
  );
}