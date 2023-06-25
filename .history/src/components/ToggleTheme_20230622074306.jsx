import React, { useEffect, useState } from "react";

export const ToggleTheme = () => {
  //we store the theme in localStorage to preserve the state on next visit with an initial theme of dark.
  const [theme, setTheme] = useState("light");

  //toggles the theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  //modify data-theme attribute on document.body when theme changes
  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);


  return (
    <button className="btn btn-circle" onClick={toggleTheme}>
      TOGGLE
    </button>
  );
};