# InfoGestSur Modernized

Versión estática en Next.js App Router de la web de Info Gest Sur Gestión. Usa el contenido, colores, logo, enlaces y assets locales extraídos de `/original`, sin backend, CMS ni WordPress.

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Build estático

```bash
npm run build
```

El sitio exportado queda en `/out`.

## GitHub Pages

Para publicar como Project Page en el repositorio `infogestsur.es-modernized`, usa:

```bash
npm run build:gh-pages
git subtree push --prefix out origin gh-pages
```

En GitHub, configura Pages para servir desde la rama `gh-pages` y carpeta raíz.

Si se publica con dominio propio en la raíz del dominio, puede usarse `npm run build` en lugar de `npm run build:gh-pages`.

## Nota de formularios

Los formularios visibles están marcados como demo y deshabilitados. No realizan envíos ni dependen de ningún servicio externo.
