function toggleDarkMode() {
    const body = document.body;
    const toggleBtn = document.getElementById('themeToggle');

    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  const handleOnMenu = ()=>{
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    }
    else{
      navLinks.style.display = 'flex';
    }
  }

  window.onload = function () {
    const savedTheme = localStorage.getItem('theme');
    const toggleBtn = document.getElementById('themeToggle');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      toggleBtn.textContent = '☀️';
    } else {
      toggleBtn.textContent = '🌙';
    }

    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  };