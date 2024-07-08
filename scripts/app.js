const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const techImage = document.getElementById('tech-image');
const toolsImage = document.getElementById('tools-image');
const body = document.body;

// Funcion: Aplicar tema
function applyTheme(theme) {
    body.classList.toggle('dark-theme', theme === 'dark');
    if (theme === 'dark') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        techImage.src = "https://skillicons.dev/icons?i=html,css,javascript,typescript,java,cpp,nodejs,python&theme=dark";
        toolsImage.src = "https://skillicons.dev/icons?i=git,github,linkedin,vscode,linux,bash,bootstrap,figma&theme=dark";
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        techImage.src = "https://skillicons.dev/icons?i=html,css,javascript,typescript,java,cpp,nodejs,python&theme=light";
        toolsImage.src = "https://skillicons.dev/icons?i=git,github,linkedin,vscode,linux,bash,bootstrap,figma&theme=light";
    }
}

// Evento: Boton cambiar tema
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Evento: Carga el tema guardado
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }
});

// Evento: Link al correo
document.getElementById('gmail-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=simancasmartinezjuanmanuel@gmail.com', '_blank');
});