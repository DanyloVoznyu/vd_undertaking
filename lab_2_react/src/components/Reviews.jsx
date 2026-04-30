import { useState, useEffect } from 'react';

export default function Reviews({ theme }) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const isLight = theme === "light";

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/5/comments');
        if (!response.ok) throw new Error('Помилка завантаження');
        
        const data = await response.json();
        setComments(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchReviews();
  }, []);

  if (error) return <p className="text-center text-red-500 font-medium py-10">{error}</p>;

  return (
    <section 
      className={`rounded-xl p-8 transition-all duration-500 shadow-md 
      ${isLight 
        ? "bg-white shadow-[0_4px_15px_rgba(30,58,138,0.1)]" 
        : "bg-[#1e293b] shadow-[0_4px_15px_rgba(0,0,0,0.25)] border border-slate-700"
      }`}
    >
      <h2 className={`text-2xl font-semibold mb-6 border-b-2 pb-2 transition-colors duration-500
        ${isLight 
          ? "text-[#1a2a40] border-[#2563eb]" 
          : "text-[#e2e8f0] border-[#60a5fa]"
        }`}
      >
        Відгуки користувачів
      </h2>
      
      <div className="grid gap-6">
        {comments.map((comment) => (
          <div 
            key={comment.id} 
            className={`p-5 rounded-lg border-l-4 transition-all duration-500 hover:scale-[1.01]
              ${isLight 
                ? "bg-[#f8fafc] border-[#2563eb] shadow-sm text-[#1a2a40]" 
                : "bg-[#0f172a] border-[#60a5fa] text-[#cbd5e1]"
              }`}
          >
            <h3 className={`font-bold capitalize mb-1 ${isLight ? "text-[#1e3a8a]" : "text-blue-400"}`}>
              {comment.name}
            </h3>
            <p className={`text-xs mb-3 font-mono ${isLight ? "text-slate-500" : "text-slate-500"}`}>
              {comment.email}
            </p>
            <p className="leading-relaxed text-sm italic">
              "{comment.body}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}