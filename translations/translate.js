let currentLang = localStorage.getItem("lang") || "ar";

// Merge translations
const translations = {
  en: window.translationsEn,
  ar: window.translationsAr,
};

// 🔄 Registry of dynamic renderers
const reRenderCallbacks = [];

// Function to apply translations
function applyTranslations(lang) {
  // Static text
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Direction + lang
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;

  // Save choice
  localStorage.setItem("lang", lang);
  currentLang = lang;

  // 🔄 Call all registered re-renderers
  reRenderCallbacks.forEach((fn) => fn());
}

// Switchers
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("langEn").addEventListener("click", () =>
    applyTranslations("en")
  );
  document.getElementById("langAr").addEventListener("click", () =>
    applyTranslations("ar")
  );

  applyTranslations(currentLang);
});
