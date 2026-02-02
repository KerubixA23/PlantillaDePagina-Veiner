
# Pastelería Delicia Guatemala — Documentación del Proyecto

Este proyecto es una plantilla profesional para una página web de pastelería, diseñada para ser visualmente atractiva, accesible y fácil de navegar. A continuación se describe la función y estructura de cada parte del proyecto.

---

## Estructura General de Carpetas y Archivos

```
├── Pasteleria.html                # Página principal (Inicio)
├── Pasteleria.css                 # Estilos globales y visuales principales
├── main.js                        # Interactividad y comportamiento común
├── apartado-menu/
│   ├── indexo.html                # Página del Menú de productos
│   ├── menu.css                   # Estilos específicos del menú
│   └── menu.js                    # (opcional) Lógica de menú interactivo
├── apartado-galeria/
│   ├── index.html                 # Galería de fotos y recuerdos
│   └── estilo.css                 # Estilos de la galería
├── apartado-nosotros/
│   ├── Index.html                 # Página "Sobre Nosotros"
│   ├── estilo.css                 # Estilos de la sección Nosotros
│   └── ag.txt                     # Texto o recursos adicionales
├── apartado-contacto/
│   ├── contacto.html              # Página de contacto y ubicación
│   └── contacto.css               # (No se usa, estilos en Pasteleria.css)
├── apartado-pedir/
│   └── index.html                 # Página para realizar pedidos
├── pedir.html                     # Redirección a apartado-pedir/index.html
├── LICENSE                        # Licencia del proyecto
├── README.md                      # Documentación (este archivo)
```

---

## Descripción de cada parte

### 1. Página principal — `Pasteleria.html`
- **Función:** Es la portada del sitio. Presenta la marca, navegación principal, hero/banner, descripción, botones de acceso rápido y enlaces a las demás secciones.
- **Componentes clave:**
	- Barra de navegación fija y responsiva
	- Hero con mensaje de bienvenida y botones destacados
	- Enlaces a Menú, Nosotros, Galería y Contacto
	- Botón flotante para pedidos

### 2. Estilos globales — `Pasteleria.css`
- **Función:** Define la identidad visual, colores, tipografías, espaciados, responsividad y estilos de todos los componentes principales del sitio.
- **Incluye:**
	- Estilos para la barra de navegación, botones, hero, cards, formularios, footer, etc.
	- Media queries para adaptar el diseño a móviles y tablets
	- Estilos compartidos por todas las páginas

### 3. Interactividad — `main.js`
- **Función:** Añade comportamiento interactivo básico y mejoras de experiencia de usuario.
- **Incluye:**
	- Menú hamburguesa para móviles
	- Cierre automático del menú al navegar
	- Scroll suave a secciones
	- Resaltado del menú activo según la sección visible
	- Botón flotante para volver arriba

### 4. Menú de productos — `apartado-menu/indexo.html`
- **Función:** Muestra las categorías y productos de la pastelería (cafés, panes, postres, bebidas).
- **Componentes:**
	- Navegación igual a la principal
	- Botones para filtrar por categoría
	- Listado dinámico de productos (puede usar JS)
	- Estilos propios en `menu.css`

### 5. Galería — `apartado-galeria/index.html`
- **Función:** Presenta fotos de productos, eventos y recuerdos de la pastelería.
- **Componentes:**
	- Hero/encabezado de galería
	- Grid de imágenes
	- Botón para volver al inicio
	- Estilos propios en `estilo.css`

### 6. Sobre Nosotros — `apartado-nosotros/Index.html`
- **Función:** Cuenta la historia, valores y equipo de la pastelería.
- **Componentes:**
	- Hero/encabezado de sección
	- Texto descriptivo y fotos
	- Botón para volver al inicio
	- Estilos propios en `estilo.css`

### 7. Contacto — `apartado-contacto/contacto.html`
- **Función:** Permite a los usuarios contactar a la pastelería y ver la ubicación en el mapa.
- **Componentes:**
	- Hero/encabezado de contacto
	- Formulario de contacto (nombre, correo, asunto, mensaje)
	- Información de contacto (teléfono, WhatsApp, correo, dirección)
	- Mapa embebido de Google Maps
	- Botón flotante para pedidos
	- **Nota:** El archivo `contacto.css` está vacío, todo el estilo proviene de `Pasteleria.css` para mantener coherencia visual.

### 8. Pedidos — `apartado-pedir/index.html`
- **Función:** Página para que los clientes realicen pedidos personalizados.
- **Componentes:**
	- Formulario de pedido (nombre, contacto, selección de productos, comentarios)
	- Listado visual de productos seleccionables
	- Botón para enviar pedido y volver al inicio

### 9. Otros archivos
- **`pedir.html`:** Redirecciona a la página de pedidos para mantener compatibilidad con enlaces antiguos.
- **`LICENSE`:** Licencia de uso del proyecto.

---

## Navegación y Enlaces
- Todas las páginas comparten la misma barra de navegación y footer para coherencia.
- Los enlaces llevan a páginas independientes (no a secciones internas), facilitando la navegación y el SEO.
- El menú es responsivo y accesible, con soporte para teclado y lectores de pantalla.

## Accesibilidad y Optimización
- Colores y contrastes pensados para buena legibilidad.
- Navegación con roles y aria-labels.
- Imágenes con atributos alt descriptivos.
- Diseño responsivo para móviles, tablets y escritorio.

## Personalización y Extensión
- Puedes modificar los textos, imágenes y productos editando los archivos HTML y CSS correspondientes.
- Para agregar nuevas secciones, duplica la estructura de una existente y enlázala desde la barra de navegación.

---

## Créditos y Licencia
- Plantilla creada para Pastelería Delicia Guatemala.
- Inspirada en diseños modernos y accesibles.
- Uso libre bajo la licencia especificada en LICENSE.
