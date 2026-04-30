import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-[1000] p-4">
      <div className="bg-white dark:bg-slate-800 w-full max-w-md p-6 rounded-xl shadow-2xl relative">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-gray-800 dark:hover:text-white"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4 dark:text-white">Зворотній зв'язок</h2>

        <form 
          action="https://formspree.io/f/ВАШ_ЕНДПОЙНТ" 
          method="POST"
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 dark:text-gray-300">Ім'я</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="p-2 border rounded-md dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 dark:text-gray-300">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="p-2 border rounded-md dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 dark:text-gray-300">Телефон</label>
            <input 
              type="tel" 
              name="phone" 
              required 
              className="p-2 border rounded-md dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 dark:text-gray-300">Повідомлення</label>
            <textarea 
              name="message" 
              rows="3" 
              required 
              className="p-2 border rounded-md dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}