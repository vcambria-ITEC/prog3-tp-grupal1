# SyncFive

## Descripción del proyecto
SyncFive es una pagina web que simula un servicio de streaming. Su nombre se debe a que somos 5 integrantes del grupo, haciendo una lluvia de ideas, surgio 'SyncFive'.

## API integrada
El proyecto consume la API de [The Movie Database (TMDB)](https://developer.themoviedb.org/docs/getting-started), una base de datos pública de películas y series. A través de ella se obtienen los títulos, descripciones, imágenes, géneros, reparto y puntuaciones que se muestran en la aplicación, reemplazando cualquier dato hardcodeado.

## Número de grupo y nombre del equipo
Grupo N° 5 - JUAN FALCO

## Integrantes del grupo
Benavidez, Tomás;
Blengino, Giuliano;
Cambria, Valentino;
Falco, Juan;
Gómez, Manuel;

## Cómo correr el proyecto en local

**1. Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd tp1-grupal
```

**2. Instalar las dependencias**
```bash
npm install
```

**3. Configurar las variables de entorno**

Crear un archivo `.env.local` en la raíz del proyecto con el siguiente contenido:
```
TMDB_ACCESS_TOKEN=tu_token_aqui
```

Para obtener el token, crearse una cuenta gratuita en [themoviedb.org](https://www.themoviedb.org/), ir a Configuración → API y copiar el valor de **Token de acceso de lectura de la API**.

**4. Iniciar el servidor de desarrollo**
```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.
