export default function Education({ theme }) {
  const isLight = theme === "light";

  return (
    <section 
      className={`rounded-xl p-8 transition-all duration-500 shadow-md hover:-translate-y-1 
      ${isLight 
        ? "bg-white shadow-[0_4px_15px_rgba(34,197,94,0.15)] hover:shadow-[0_8px_25px_rgba(34,197,94,0.2)]" 
        : "bg-[#132a1c] shadow-[0_4px_15px_rgba(0,0,0,0.4)] border border-[#14532d]"
      }`}
    >
      <h2 className={`text-2xl font-semibold mb-4 border-b-2 pb-2 transition-colors duration-500
        ${isLight 
          ? "text-[#102a1a] border-[#16a34a]" 
          : "text-[#d1fae5] border-[#4ade80]"
        }`}
      >
        Освіта
      </h2>
      <p className={`leading-relaxed text-lg transition-colors duration-500
        ${isLight ? "text-[#102a1a]" : "text-[#d1fae5]"}`}
      >
        Студент університету, спеціальність у сфері інформаційних технологій.
      </p>
    </section>
  );
}