const toggleButton = document.getElementById('dark-mode-toggle');
const htmlElement = document.documentElement;

toggleButton.addEventListener('click', () => {
  htmlElement.classList.toggle('dark-mode');

  // Update the button icon based on the current mode
  if (htmlElement.classList.contains('dark-mode')) {
    toggleButton.querySelector('i:first-child').classList.remove('fa-moon');
    toggleButton.querySelector('i:first-child').classList.add('fa-sun');
  } else {
    toggleButton.querySelector('i:first-child').classList.remove('fa-sun');
    toggleButton.querySelector('i:first-child').classList.add('fa-moon');
  }
});

// Check if the user has a preferred color scheme and apply it
if (localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark-mode');
} else {
  document.documentElement.classList.remove('dark-mode');
}

// Save the current color theme to localStorage
const saveColorTheme = () => {
    localStorage.setItem('color-theme', document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light');
  };
  
  // Listen for changes to the color theme and save it to localStorage
  document.documentElement.addEventListener('transitionend', saveColorTheme);
  
  // Check if the user has a preferred color scheme and apply it
  saveColorTheme();