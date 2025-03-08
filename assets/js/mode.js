let currentTheme = "";

const handleInitialTheme = () => {
 
  const rootClasses = ["transition", "duration-100"];
  document.documentElement.classList.add(...rootClasses);
  
  const storedTheme = localStorage.getItem("color-theme");
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (storedTheme === "dark" || (storedTheme === null && prefersDarkMode)) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }
};

/**
 * Apply the specified theme to the document
 * @param {string} theme 
 */
const applyTheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  
  localStorage.setItem("color-theme", theme);
  currentTheme = theme;
};


const toggleTheme = () => {
  const newTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(newTheme);
  updateThemeUI();
};


const updateThemeUI = () => {
  updateThemeIcon();
  updateHobbyIcons();
};


const updateThemeIcon = () => {
  const themeChanger = document.querySelector(".theme-changer");
  if (!themeChanger) return;
  
  const isDarkTheme = currentTheme === "dark";
  const iconFileName = isDarkTheme ? "sun--v1.png" : "bright-moon.png";
  const iconColor = isDarkTheme ? "f8fafc" : "707071";
  
  themeChanger.setAttribute(
    "src", 
    `https://img.icons8.com/ios-filled/20/${iconColor}/${iconFileName}`
  );
};

/**
 * Update hobby icons color based on current theme
 */
const updateHobbyIcons = () => {
  const images = document.querySelectorAll(".hobby-icon");
  const colorCode = currentTheme === "dark" ? "f8fafc" : "707071";
  
  images.forEach(image => {
    const src = image.getAttribute("src");
    if (!src) return;
    
    const srcParts = src.split("/");
    if (srcParts.length < 6) return;
    
    srcParts[5] = colorCode;
    image.setAttribute("src", srcParts.join("/"));
  });
};

// Initialize theme on page load
handleInitialTheme();

document.addEventListener("DOMContentLoaded", () => {
  const themeChanger = document.querySelector(".theme-changer");
  
  updateThemeUI();
  
  if (themeChanger) {
    themeChanger.addEventListener("click", toggleTheme);
  }
  
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("color-theme")) {
      const newTheme = e.matches ? "dark" : "light";
      applyTheme(newTheme);
      updateThemeUI();
    }
  });
});