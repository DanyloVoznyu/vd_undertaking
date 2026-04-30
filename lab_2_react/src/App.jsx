import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews.jsx";
import ContactForm from "./components/ContactForm.jsx";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    const hour = new Date().getHours();
    return hour >= 7 && hour < 21 ? "light" : "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    // Додаємо клас dark-theme на body для підтримки твоїх CSS змінних
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const isLight = theme === "light";

  return (
    <div 
      className={`min-h-screen transition-colors duration-500 p-4 md:p-8 
      ${isLight 
        ? "bg-[#effaf3]" // Твоя змінна --bg-color (світла)
        : "bg-[#0b1f14]" // Твоя змінна --bg-color (темна)
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        <main className="grid gap-6">
          <About theme={theme} />
          <Skills theme={theme} />
          <Education theme={theme} />
          <Projects theme={theme} />
          <Reviews theme={theme} />
        </main>

        <Footer theme={theme} />
        <ContactForm theme={theme} />
      </div>
    </div>
  );
}

export default App;