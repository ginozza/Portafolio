const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const techImage = document.getElementById('tech-image');
const toolsImage = document.getElementById('tools-image');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        techImage.src = "https://skillicons.dev/icons?i=html,css,javascript,typescript,java,cpp,nodejs,python&theme=dark";
        toolsImage.src = "https://skillicons.dev/icons?i=git,github,linkedin,vscode,linux,bash,bootstrap,figma&theme=dark";
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        techImage.src = "https://skillicons.dev/icons?i=html,css,javascript,typescript,java,cpp,nodejs,python&theme=light";
        toolsImage.src = "https://skillicons.dev/icons?i=git,github,linkedin,vscode,linux,bash,bootstrap,figma&theme=light";
    }
});

document.getElementById('gmail-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=simancasmartinezjuanmanuel@gmail.com', '_blank');
});