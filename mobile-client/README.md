# Mobile Client

Aplicación móvil desarrollada con React Native y Expo para gestionar publicaciones.

## Estructura del Proyecto

```
mobile-client/
├── src/
│   ├── api/               # Configuración de la API y servicios
│   │   └── api.ts         # Cliente HTTP con Axios
│   │
│   ├── app/             # Configuración de Redux
│   │   └── store.ts       # Configuración del store de Redux
│   │
│   ├── components/      # Componentes reutilizables
│   │   ├── PostForm.tsx   # Formulario para crear/editar posts
│   │   └── PostList.tsx   # Lista de posts con paginación
│   │
│   ├── features/        # Lógica de negocio (Redux slices)
│   │   └── posts/       
│   │       └── postsSlice.ts
│   │
│   └── @types/          # Definiciones de tipos TypeScript
│       └── env.d.ts       # Tipos para variables de entorno
│
├── App.tsx              # Componente raíz de la aplicación
├── babel.config.js       # Configuración de Babel
└── .env                  # Variables de entorno (no incluido en control de versiones)
```

## Configuración del Entorno

1. **Variables de Entorno**

   Crea un archivo `.env` en la raíz del proyecto con la siguiente variable:
   ```
   API_BASE_URL=http://tu-ip-local:5000/api
   ```

   Ejemplo:
   ```
   API_BASE_URL=http://192.168.1.87:5000/api
   ```

2. **Archivo .env.example**

   El proyecto incluye un archivo `.env.example` como plantilla. Cópialo a `.env` y configura los valores necesarios.

## Instalación

1. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

2. Inicia la aplicación:
   ```bash
   npx expo start
   ```

   Para forzar una recarga limpia:
   ```bash
   npx expo start -c
   ```

## Características

- Listado de posts con paginación
- Búsqueda de posts por título
- Creación de nuevos posts
- Eliminación de posts
- Diseño responsivo

## Dependencias Principales

- React Native
- Expo
- Redux Toolkit
- React Redux
- Axios
- React Native DotEnv

## Scripts Disponibles

- `npm start` o `expo start`: Inicia el servidor de desarrollo
- `npm run android`: Ejecuta en Android
- `npm run ios`: Ejecuta en iOS
- `npm run web`: Ejecuta en navegador web

## Notas de Desarrollo

- Asegúrate de que el servidor backend esté en ejecución antes de iniciar la aplicación.
- Las variables de entorno sensibles no deben incluirse en el control de versiones.
- Para desarrollo en red local, asegúrate de que el dispositivo móvil y el servidor estén en la misma red.
