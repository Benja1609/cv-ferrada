Portafolio Web - Benjamin Ferrada

Este proyecto es una versión estática y altamente optimizada del portafolio profesional de Benjamin Ferrada. Ha sido convertido de una aplicación React a una solución HTML5, CSS3 y Vanilla JavaScript en un único archivo para facilitar su despliegue y uso sin necesidad de procesos de compilación complejos (como npm start o build).

🛠 Tecnologías Utilizadas

HTML5: Estructura semántica del contenido.

Tailwind CSS (vía CDN): Framework de utilidad para el diseño responsivo y moderno.

JavaScript (Vanilla): Lógica de interacción, animaciones de partículas, spy scroll y manejo del formulario.

Lucide Icons (vía CDN): Librería de iconos vectoriales ligeros.

🚀 Cómo ejecutarlo

Al ser un archivo único y autónomo, no requiere instalación de dependencias ni servidor local complejo.

Descarga el archivo index.html.

Ábrelo directamente con cualquier navegador web moderno (Chrome, Firefox, Edge, Safari) haciendo doble clic sobre él.

¡Listo! Verás el portafolio completamente funcional con todas sus animaciones.

✨ Características Incluidas

Diseño Responsivo: Se adapta perfectamente a móviles, tablets y escritorio.

Animaciones Avanzadas:

Fondo con ondas generadas dinámicamente.

Partículas flotantes.

Líneas de grid tipo "Matrix/Tech".

Efecto "Glow" que sigue el cursor del mouse.

Navegación Suave (Smooth Scroll): Desplazamiento fluido entre secciones.

Formulario de Contacto: Simulación funcional con validación y mensaje de éxito.

📁 Estructura del Código

Todo el código se encuentra en index.html:

<head>: Contiene los estilos personalizados (@keyframes) y las importaciones de librerías (Tailwind, Lucide).

<body>: Estructura visual dividida en <section> por cada parte del portafolio (Inicio, Sobre mí, Habilidades, etc.).

<script>: Al final del cuerpo, contiene toda la lógica:

Generación de elementos del DOM para animaciones.

Lógica del menú móvil.

Observador de scroll (Scroll Spy).