// Function to set the theme based on user selection
function setTheme(theme) {
  if (theme === 'light') {
      document.getElementById('theme').setAttribute('href', 'lightmode.css');
  } else if (theme === 'dark') {
      document.getElementById('theme').setAttribute('href', 'darkmode.css');
  }
  
  // Store the selected theme in local storage
  localStorage.setItem('theme', 'theme/' + theme + 'mode.css');
}

// Check if a theme is stored in local storage, otherwise default to light mode
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.getElementById('theme').setAttribute('href', savedTheme);
}
