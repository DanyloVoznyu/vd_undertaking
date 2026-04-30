export default function Skills({ theme }) {
  const isLight = theme === "light";

  const sectionClasses = `rounded-xl p-8 transition-all duration-500 shadow-md hover:-translate-y-1 
    ${isLight 
      ? "bg-white shadow-[0_4px_15px_rgba(30,58,138,0.1)] hover:shadow-[0_8px_25px_rgba(30,58,138,0.2)]" 
      : "bg-[#1e293b] shadow-[0_4px_15px_rgba(0,0,0,0.25)] border border-slate-700"
    }`;

  const titleClasses = `text-2xl font-semibold mb-4 border-b-2 pb-2 transition-colors duration-500
    ${isLight 
      ? "text-[#1a2a40] border-[#2563eb]" 
      : "text-[#e2e8f0] border-[#60a5fa]"
    }`;

  const listClasses = `grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 transition-colors duration-500
    ${isLight ? "text-[#1a2a40]" : "text-[#cbd5e1]"}`;

  const dotClasses = `mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${isLight ? "bg-[#2563eb]" : "bg-[#60a5fa]"}`;

  return (
    <section className={sectionClasses}>
      <h2 className={titleClasses}>Технічні навички</h2>
      <ul className={`${listClasses} mb-8`}>
        {[
          "Базове програмування: C, C++, C#",
          "Базове програмування на Python",
          "Створення Telegram-ботів",
          "Основи алгоритмів та логіки програмування"
        ].map((skill, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className={dotClasses}></span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>

      <h2 className={titleClasses}>Особисті якості</h2>
      <ul className={listClasses}>
        {[
          "Аналітичне мислення", "Вміння вирішувати проблеми",
          "Самостійне навчання", "Відповідальність",
          "Командна робота", "Комунікація",
          "Критичне мислення", "Адаптивність",
          "Організація часу", "Стресостійкість"
        ].map((quality, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className={dotClasses}></span>
            <span>{quality}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}