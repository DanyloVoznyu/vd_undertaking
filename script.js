const BROWSER_LABELS = {
    userAgent: "User Agent",
    appName: "Назва браузера",
    appVersion: "Версія браузера",
    platform: "Платформа",
    language: "Мова",
    cookieEnabled: "Cookie",
    onLine: "Підключення",
    hardwareConcurrency: "Ядра CPU",
    deviceMemory: "Пам’ять"
};

const getBrowserInfo = () => ({
    userAgent: navigator.userAgent,
    appName: navigator.appName,
    appVersion: navigator.appVersion,
    platform: navigator.platform,
    language: navigator.language,
    cookieEnabled: navigator.cookieEnabled,
    onLine: navigator.onLine,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: navigator.deviceMemory || "Невідомо"
});

const formatValue = (key, value) => {
    if (['cookieEnabled', 'onLine'].includes(key)) return value ? "Так" : "Ні";
    if (key === "deviceMemory" && value !== "Невідомо") return `${value} GB`;
    return value;
};

const createStorageHTML = () => {
    const items = Object.keys(localStorage).map(key => {
        const rawValue = localStorage.getItem(key);
        let content = '';

        try {
            const parsed = JSON.parse(rawValue);
            if (parsed && typeof parsed === 'object') {
                content = `<div class="storage-inline-list">` +
                    Object.entries(parsed).map(([k, v]) => `
                        <p class="storage-inline-item">
                            <strong>${BROWSER_LABELS[k] || k}:</strong> ${formatValue(k, v)}
                        </p>
                    `).join('') + `</div>`;
            } else {
                content = `<p class="storage-inline-item"><strong>${key}:</strong> ${parsed}</p>`;
            }
        } catch {
            content = `<p class="storage-inline-item"><strong>${key}:</strong> ${rawValue}</p>`;
        }
        return content;
    });

    return `<h3>Інформація з localStorage</h3>${items.join('')}`;
};

const fetchComments = async () => {
    const container = document.getElementById("comments-container");
    if (!container) return;

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/5/comments");
        if (!response.ok) throw new Error();
        
        const comments = await response.json();
        container.innerHTML = comments.map(c => `
            <div class="comment-card">
                <h3>${c.name}</h3>
                <p><strong>Email:</strong> ${c.email}</p>
                <p>${c.body}</p>
            </div>
        `).join('');
    } catch {
        container.innerHTML = "<p>Не вдалося завантажити коментарі.</p>";
    }
};

const updateThemeUI = (theme) => {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark-theme", isDark);
    
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.textContent = isDark ? "Увімкнути денну тему" : "Увімкнути нічну тему";
    
    localStorage.setItem("theme", theme);
};

const toggleTheme = () => {
    const currentTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
    updateThemeUI(currentTheme);
};

const toggleModal = (show = true) => {
    const modal = document.getElementById("feedback-modal");
    if (modal) modal.classList.toggle("hidden", !show);
};

<<<<<<< HEAD
=======
// 7. Ініціалізація
>>>>>>> 8057c992b28e2df630aaedc1c8369dc2a49e32f4
const init = () => {
    localStorage.setItem("browserInfo", JSON.stringify(getBrowserInfo()));
    const storageBlock = document.getElementById("storage-info");
    if (storageBlock) storageBlock.innerHTML = createStorageHTML();

    const savedTheme = localStorage.getItem("theme") || 
        (new Date().getHours() >= 7 && dark.getHours() < 21 ? "light" : "dark");
    updateThemeUI(savedTheme);

<<<<<<< HEAD
=======
    // Listeners
>>>>>>> 8057c992b28e2df630aaedc1c8369dc2a49e32f4
    document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
    document.getElementById("close-modal")?.addEventListener("click", () => toggleModal(false));
    
    window.addEventListener("click", (e) => {
        if (e.target.id === "feedback-modal") toggleModal(false);
    });

    fetchComments();
    setTimeout(() => toggleModal(true), 60000);
};

document.addEventListener("DOMContentLoaded", init);