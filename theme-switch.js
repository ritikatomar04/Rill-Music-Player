document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const currentTheme = localStorage.getItem("theme");

    // Check current theme and set it
    if (currentTheme === "dark") {
        setTheme("themes/dark-mode.css");
    } else if (currentTheme === "default") {
        setTheme("themes/default.css");
    } else if (currentTheme === "light-mode-1") {
        setTheme("themes/light-mode-1.css");
    } else if (currentTheme === "dark-mode-1") {
        setTheme("themes/dark-mode-1.css");
    } else {
        setTheme("themes/light-mode.css"); // Default to light mode
    }

    // Function to set theme
    function setTheme(themeName) {
        document.getElementById("theme").setAttribute("href", themeName);
        localStorage.setItem("theme", themeName.replace("themes/", "").replace(".css", "").split("-")[0]); // Store only theme name
    }

    // Toggle between themes
    darkModeToggle.addEventListener("click", function() {
        const currentTheme = document.getElementById("theme").getAttribute("href");
        if (currentTheme === "themes/light-mode.css") {
            setTheme("themes/dark-mode.css");
        } else if (currentTheme === "themes/dark-mode.css") {
            setTheme("themes/default.css");
        } else if (currentTheme === "themes/default.css") {
            setTheme("themes/light-mode-1.css");
        } else if (currentTheme === "themes/light-mode-1.css") {
            setTheme("themes/dark-mode-1.css");
        } else {
            setTheme("themes/light-mode.css");
        }
    });
});
