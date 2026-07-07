# Frontend Starter Kit

Base React para crear landing pages o sitios frontend desde cero, manteniendo una estructura consistente entre proyectos.

Este repositorio no incluye componentes de negocio ni una landing final. La intención es clonar la base, definir el requerimiento del nuevo proyecto y construir los componentes necesarios dentro de la estructura existente.

## Included

- React + Vite
- React Router
- i18n simple con diccionarios JSON (`en`, `es`)
- Tailwind CSS v4 support
- Design tokens (`src/theme/tokens.css`)
- Theme base (`src/theme/base.css`, `src/theme/components.css`)
- Material UI
- React Icons
- Organización inicial de carpetas
- Cloudflare SPA fallback (`public/_redirects`)

## Structure

```txt
src/
  assets/
  components/
    primitives/
    composites/
    layout/
    blocks/
  data/
  lang/
  pages/
  theme/
```

## Folder Guidelines

- `components/primitives`: elementos pequeños y reutilizables, como botones, inputs, badges o wrappers simples.
- `components/composites`: piezas compuestas que combinan primitives, como cards, nav items o formularios parciales.
- `components/layout`: estructura compartida, como headers, footers, shells o wrappers de página.
- `components/blocks`: secciones completas de landing, como hero, servicios, testimonios, FAQ o contacto.
- `data`: contenido o configuración desacoplada de los componentes.
- `lang`: diccionarios e infraestructura de i18n.
- `pages`: vistas conectadas a React Router.
- `theme`: tokens, estilos base y estilos globales del proyecto.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Environment Variables

Usa `.env.example` como plantilla para variables públicas de Vite.

```bash
cp .env.example .env.local
```

Agrega solo variables necesarias para el proyecto actual. Recuerda que las variables expuestas al frontend deben iniciar con `VITE_`.

## Deploy to Cloudflare Pages

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

This project includes:

```txt
public/_redirects
/* /index.html 200
```

for SPA route refresh support.

## White App Workflow

Este proyecto está pensado como base reutilizable:

1. Clonas este repo base.
2. Definir el objetivo del nuevo proyecto: marca, industria, público, idioma, secciones y CTAs.
3. Construir los componentes necesarios siguiendo la estructura de carpetas.
4. Reemplazar textos, tokens visuales y assets según el branding del proyecto.
5. Publicar el proyecto derivado en otro repositorio.
6. Mantener este repo como base limpia para futuros proyectos.

### Cambiar remotos sin tocar el repo base

Si ya clonaste `landing-starter-kit` y quieres publicar en un repo nuevo:

```bash
# 1) Renombrar remoto actual (base) para conservar referencia
git remote rename origin upstream

# 2) Agregar el repo nuevo como origin
git remote add origin https://github.com/<tu-usuario>/<nuevo-repo>.git

# 3) Verificar
git remote -v
```

Debes ver:

- `origin` -> repo nuevo (destino del proyecto actual)
- `upstream` -> `landing-starter-kit` (base)

### Primer push al repo nuevo

```bash
git add .
git commit -m "Initial <nombre-del-proyecto> frontend"
git push -u origin main
```

Con esto publicas en el repo nuevo y no sobrescribes el starter base.

### Checklist rápido

Antes de hacer `git push`:

```bash
git remote -v
git branch --show-current
```

Confirma:

- el branch actual es el esperado
- `origin` apunta al repo del proyecto actual
- `upstream` apunta al repo base `landing-starter-kit`

## Prompt Maestro Para Nuevos Repos

Usa este prompt al abrir un chat nuevo en un repo clonado desde esta base.

```txt
Actúa como mi partner técnico para este repositorio.

Contexto obligatorio:
- Este repositorio deriva de un frontend starter base.
- Este repo actual es independiente del repo base.
- Nunca debes asumir cambios en el repo base; trabaja solo en este repo actual.
- El starter solo trae configuración inicial y estructura de carpetas.
- Debes crear los componentes, páginas y datos que el proyecto requiera.

Objetivo del proyecto:
- Marca: {{nombreMarca}}
- Industria: {{tipoDeProyecto}}
- Público objetivo: {{publicoObjetivo}}
- Idiomas: {{idiomas}} (ej: en, es)
- CTA principal: {{ctaPrincipal}}
- Estilo visual deseado: {{estiloVisual}}
- Secciones requeridas: {{seccionesRequeridas}}

Reglas de trabajo:
1. Respeta la estructura de carpetas del starter.
2. Crea componentes solo cuando el requerimiento lo justifique.
3. Mantén contenido desacoplado cuando facilite reutilización o edición.
4. Usa tokens de theme para colores, espaciado y radios.
5. Prioriza responsive mobile-first y accesibilidad básica.
6. Si algo requiere credenciales, usa `.env.local` y actualiza `.env.example`.
7. Implementa directamente los cambios y valida con lint/build.

Formato de respuesta esperado:
- Resumen corto de lo implementado.
- Cambios aplicados por archivo.
- Validación ejecutada (lint/build).
- Siguientes pasos recomendados.
```

## Prompt Corto

```txt
Este repo deriva de un frontend starter base. Quiero construir una landing para {{tipoDeProyecto}} con estilo {{estiloVisual}} e idiomas {{idiomas}}. Crea los componentes necesarios siguiendo la estructura del proyecto, implementa directamente y valida con lint/build.
```
