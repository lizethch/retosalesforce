# React + Vite

# Random User Generator

Esta aplicación web genera una lista de 10 usuarios aleatorios utilizando la API de [Random User](https://randomuser.me/).

## Características

- Muestra una lista de 10 usuarios aleatorios
- Para cada usuario se muestra:
  - Nombre completo
  - Género
  - Ubicación (ciudad y país)
  - Correo electrónico
  - Fecha de nacimiento
  - Fotografía
- Diseño responsive utilizando Tailwind CSS
- Opción para generar nuevos usuarios aleatorios

## Tecnologías utilizadas

- [React](https://reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario
- [Vite](https://vitejs.dev/) - Herramienta de compilación que proporciona un entorno de desarrollo más rápido
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitario
- [Axios](https://axios-http.com/) - Cliente HTTP basado en promesas para realizar solicitudes a la API

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/random-user-list.git

# Navegar al directorio del proyecto
cd random-user-list

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/`

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la construcción de producción localmente

## Estructura del proyecto

```
random-user-list/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── UserCard.jsx
│   │   ├── UserList.jsx
│   │   └── Header.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## API utilizada

Esta aplicación utiliza la API gratuita de [Random User](https://randomuser.me/), que proporciona datos aleatorios de usuarios ficticios, incluyendo nombres, direcciones, correos electrónicos, y más.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.