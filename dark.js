const toggleButton = document.getElementById('theme-toggle');

const body = document.body;

// Verifica se há preferência armazenada no LocalStorage
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️'; // Muda o ícone para o sol no Dark Mode
}

// Alterna entre modo claro e escuro
toggleButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    
    // Atualiza o ícone
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});