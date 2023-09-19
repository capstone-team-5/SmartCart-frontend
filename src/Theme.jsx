const applyTheme = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const setTheme = (theme) => {
  if (theme === "dark") {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
};

export { applyTheme, setTheme };
