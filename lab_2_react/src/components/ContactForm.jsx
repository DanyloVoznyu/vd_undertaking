import { useState, useEffect } from 'react';

export default function ContactForm({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const isLight = theme === "light";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-[1000] p-4 backdrop-blur-sm">
      <div 
        className={`w-full max-w-md p-6 rounded-xl relative transition-all duration-500 shadow-2xl
        ${isLight 
          ? "bg-white text-[#102a1a]" 
          : "bg-[#132a1c] text-[#d1fae5] border border-[#14532d]"
        }`}
      >
        <button 
          onClick={() => setIsOpen(false)}
          className={`absolute top-3 right-4 text-2xl transition-colors
            ${isLight ? "text-gray-400 hover:text-[#16a34a]" : "text-gray-500 hover:text-[#4ade80]"}`}
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">Зворотній зв'язок</h2>

        <form 
          action="https://formspree.io/f/ВАШ_ЕНДПОЙНТ" 
          method="POST"
          className="flex flex-col gap-3"
        >
          {[
            { label: "Ім'я", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Телефон", name: "phone", type: "tel" }
          ].map((field) => (
            <div key={field.name} className="flex flex-col">
              <label className={`text-sm font-medium mb-1 ${isLight ? "text-[#102a1a]/70" : "text-[#d1fae5]/70"}`}>
                {field.label}
              </label>
              <input 
                type={field.type} 
                name={field.name} 
                required 
                className={`p-2 border rounded-md outline-none transition-all duration-300
                  ${isLight 
                    ? "bg-white border-[#bbf7d0] focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a]" 
                    : "bg-[#0b1f14] border-[#14532d] focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] text-white"
                  }`}
              />
            </div>
          ))}

          <div className="flex flex-col">
            <label className={`text-sm font-medium mb-1 ${isLight ? "text-[#102a1a]/70" : "text-[#d1fae5]/70"}`}>
              Повідомлення
            </label>
            <textarea 
              name="message" 
              rows="3" 
              required 
              className={`p-2 border rounded-md outline-none transition-all duration-300
                ${isLight 
                  ? "bg-white border-[#bbf7d0] focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a]" 
                  : "bg-[#0b1f14] border-[#14532d] focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] text-white"
                }`}
            ></textarea>
          </div>

          <button 
            type="submit"
            className={`mt-2 font-bold py-2 px-4 rounded-md transition-all transform hover:scale-[1.02] active:scale-95 text-white
              ${isLight 
                ? "bg-gradient-to-r from-[#14532d] to-[#22c55e] shadow-[0_4px_15px_rgba(34,197,94,0.3)]" 
                : "bg-gradient-to-r from-[#052e16] to-[#14532d] border border-[#14532d]"
              }`}
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}