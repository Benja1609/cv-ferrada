// Datos
const sections = ['inicio', 'sobre-mi', 'habilidades', 'modelamiento', 'experiencia', 'educacion', 'portafolio', 'contacto'];
const skillsData = [
    { name: 'Python', level: 65, icon: 'code', color: 'from-blue-500 to-purple-500' },
    { name: 'SQL', level: 60, icon: 'database', color: 'from-purple-500 to-blue-400' },
    { name: 'AutoCAD', level: 80, icon: 'pen-tool', color: 'from-blue-600 to-purple-600' },
    { name: 'Revit', level: 70, icon: 'box', color: 'from-purple-400 to-blue-500' },
    { name: 'Trabajo en Equipo', level: 70, icon: 'user', color: 'from-blue-500 to-purple-400' },
    { name: 'Resolución de Problemas', level: 75, icon: 'briefcase', color: 'from-purple-500 to-blue-600' }
];
const modelamientoSkillsData = [
    {
        title: 'Diseño Arquitectónico en AutoCAD',
        description: 'Elaboración de planos arquitectónicos, estructurales y de instalaciones. Manejo avanzado de capas, bloques dinámicos y referencias externas.',
        icon: 'pen-tool',
        color: 'from-blue-500 to-purple-500'
    },
    {
        title: 'Modelado BIM con Revit',
        description: 'Creación de modelos 3D paramétricos, familias personalizadas, y coordinación multidisciplinaria. Experiencia en arquitectura, estructura y MEP.',
        icon: 'box',
        color: 'from-purple-500 to-blue-600'
    },
    {
        title: 'Análisis Estructural',
        description: 'Aplicación de principios de diseño estructural, cálculo de cargas, y verificación de normas NCh. Integración con software de análisis.',
        icon: 'layers',
        color: 'from-blue-600 to-purple-400'
    }
];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    renderSkills();
    renderModelamiento();
    createParticles();
    createWaves();
    createGridLines();
    setupScrollSpy();
    setupMouseEffect();
    document.getElementById('copyright').textContent = `© ${new Date().getFullYear()} Benjamin Ferrada Cortés. Todos los derechos reservados.`;
    lucide.createIcons();
});

// 1. Menú
function initMenu() {
    const menuContainer = document.getElementById('desktop-menu');
    const mobileMenuContainer = document.getElementById('mobile-menu');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    let isMenuOpen = false;

    // Generar links
    sections.forEach(section => {
        const label = section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        
        // Desktop
        const desktopBtn = document.createElement('button');
        desktopBtn.className = 'nav-link text-sm font-medium transition-all hover:text-purple-400 hover:scale-110 text-gray-300';
        desktopBtn.dataset.section = section;
        desktopBtn.textContent = label;
        desktopBtn.onclick = () => scrollToSection(section);
        menuContainer.appendChild(desktopBtn);

        // Mobile
        const mobileLink = document.createElement('button');
        mobileLink.className = 'block w-full text-left px-4 py-2 rounded-lg transition-all hover:translate-x-2 text-gray-300 hover:bg-purple-500/10 mobile-nav-link';
        mobileLink.dataset.section = section;
        mobileLink.textContent = label;
        mobileLink.onclick = () => {
            scrollToSection(section);
            toggleMenu();
        };
        mobileMenuContainer.appendChild(mobileLink);
    });

    // Toggle Mobile Menu
    mobileBtn.onclick = toggleMenu;
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if(isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            menuIcon.setAttribute('data-lucide', 'x');
        } else {
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    }
}

// 2. Renderizar Habilidades
function renderSkills() {
    const container = document.getElementById('skills-container');
    skillsData.forEach(skill => {
        const div = document.createElement('div');
        div.className = "bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/40 cursor-pointer";
        div.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                        <i data-lucide="${skill.icon}" class="text-white w-5 h-5"></i>
                    </div>
                    <h3 class="text-lg font-semibold text-white">${skill.name}</h3>
                </div>
                <span class="text-purple-300 font-bold">${skill.level}%</span>
            </div>
            <div class="h-3 bg-gray-700 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r ${skill.color} transition-all duration-1000" style="width: ${skill.level}%"></div>
            </div>
        `;
        container.appendChild(div);
    });
}

// 3. Renderizar Modelamiento
function renderModelamiento() {
    const container = document.getElementById('modelamiento-container');
    modelamientoSkillsData.forEach(skill => {
        const div = document.createElement('div');
        div.className = "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/40 cursor-pointer";
        div.innerHTML = `
            <div class="w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mb-6 hover:rotate-12 transition-transform duration-500">
                <i data-lucide="${skill.icon}" class="text-white w-8 h-8"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">${skill.title}</h3>
            <p class="text-gray-300 leading-relaxed">${skill.description}</p>
        `;
        container.appendChild(div);
    });
}

// 4. Efectos de Fondo (Partículas)
function createParticles() {
    const container = document.getElementById('particles-container');
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 8 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 10;
        
        let bg;
        let shadow;
        if (i % 3 === 0) {
            bg = 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, rgba(59, 130, 246, 0.3) 100%)';
        } else if (i % 3 === 1) {
            bg = 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(147, 51, 234, 0.3) 100%)';
        } else {
            bg = 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, rgba(147, 51, 234, 0.2) 100%)';
        }

        if (i % 2 === 0) {
            shadow = '0 0 20px rgba(147, 51, 234, 0.6)';
        } else {
            shadow = '0 0 20px rgba(59, 130, 246, 0.6)';
        }

        particle.className = 'absolute rounded-full animate-float';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.background = bg;
        particle.style.boxShadow = shadow;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        container.appendChild(particle);
    }
}

// 5. Olas
function createWaves() {
    const container = document.getElementById('waves-container');
    for(let i=0; i<4; i++) {
        const wave = document.createElement('div');
        wave.className = 'absolute w-[200%] h-full animate-wave opacity-5';
        wave.style.left = '-50%';
        wave.style.animationDelay = `${i * 2.5}s`;
        
        const inner = document.createElement('div');
        inner.className = 'absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 transform -skew-y-12';
        
        wave.appendChild(inner);
        container.appendChild(wave);
    }
}

// 6. Grid
function createGridLines() {
    const container = document.getElementById('grid-container');
    for(let i=0; i<10; i++) {
        const pos = (i * 10) + Math.random() * 5;
        const duration = Math.random() * 10 + 15;
        const delay = Math.random() * 5;
        
        // Horizontal
        const hLine = document.createElement('div');
        hLine.className = 'absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-grid-horizontal';
        hLine.style.top = `${pos}%`;
        hLine.style.animationDuration = `${duration}s`;
        hLine.style.animationDelay = `${delay}s`;
        container.appendChild(hLine);
        
        // Vertical
        const vLine = document.createElement('div');
        vLine.className = 'absolute h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-grid-vertical';
        vLine.style.left = `${pos}%`;
        vLine.style.animationDuration = `${duration}s`;
        vLine.style.animationDelay = `${delay}s`;
        container.appendChild(vLine);
    }
}

// 7. Navegación
function scrollToSection(id) {
    const el = document.getElementById(id);
    if(el) {
        el.scrollIntoView({ behavior: 'smooth' });
        // Actualizar activo manualmente para feedback instantáneo
        updateActiveNav(id);
    }
}

function updateActiveNav(id) {
    // Desktop
    document.querySelectorAll('.nav-link').forEach(link => {
        if(link.dataset.section === id) {
            link.classList.add('text-purple-400', 'scale-110');
            link.classList.remove('text-gray-300');
        } else {
            link.classList.remove('text-purple-400', 'scale-110');
            link.classList.add('text-gray-300');
        }
    });
    // Mobile
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        if(link.dataset.section === id) {
            link.classList.add('bg-purple-500/20', 'text-purple-400');
            link.classList.remove('text-gray-300', 'hover:bg-purple-500/10');
        } else {
            link.classList.remove('bg-purple-500/20', 'text-purple-400');
            link.classList.add('text-gray-300', 'hover:bg-purple-500/10');
        }
    });
}

function setupScrollSpy() {
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100;
        for (const section of sections) {
            const el = document.getElementById(section);
            if(el) {
                const top = el.offsetTop;
                const bottom = top + el.offsetHeight;
                if(scrollPos >= top && scrollPos < bottom) {
                    updateActiveNav(section);
                    break;
                }
            }
        }
    });
}

// 8. Efecto Mouse
function setupMouseEffect() {
    const glow = document.getElementById('mouse-glow');
    window.addEventListener('mousemove', (e) => {
        // Mover el div
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    });
}

// 9. Formulario
function handleFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('message').value;
    if(name && email && msg) {
        document.getElementById('success-message').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('contact-form').reset();
            document.getElementById('success-message').classList.add('hidden');
        }, 3000);
    }
}