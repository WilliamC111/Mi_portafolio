# William Cely — Portfolio

Portafolio profesional bilingüe para presentar proyectos, experiencia y
habilidades en analítica de datos, desarrollo de software y soluciones IT.
Incluye modo claro/oscuro, preferencias guardadas y animaciones con GSAP.

## Desarrollo local

Requiere Node.js 20.9 o superior.

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>. Para validar una compilación de producción:

```bash
npm run build
npm start
```

## Estructura

- `app/`: ruta de inicio, estilos globales y metadatos de Next.js.
- `components/portfolio/`: encabezado, hero, analítica, proyectos, experiencia,
  perfil y pie de página como componentes independientes.
- `components/site-preferences.tsx`: contexto común para idioma y tema.
- `components/gsap-effects.tsx`: animaciones de entrada y scroll con GSAP y
  ScrollTrigger, respetando la preferencia del sistema para reducir movimiento.
- `lib/content.ts`: proyectos, experiencia, perfil y habilidades.
- `lib/i18n.ts`: textos en español e inglés.

El portafolio no requiere una API propia ni un backend Node separado. Next.js
sirve la experiencia web y los enlaces de contacto abren Gmail, el teléfono y
los perfiles profesionales.

## Despliegue en Firebase Hosting

El sitio usa exportación estática de Next.js y publica el directorio `out/`.
Para desplegarlo, instala Firebase CLI, inicia sesión y selecciona el proyecto
Firebase correcto:

```bash
npx firebase-tools login
npx firebase-tools projects:list
npx firebase-tools deploy --only hosting --project williamcelyl
```

El proyecto de Firebase se identifica como `williamcelyl` en CLI y como
`WilliamCelyL` en Firebase Console.
