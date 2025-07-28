# Mis XV - Rosmery

Una elegante invitación digital para celebrar los XV años de Rosmery el 25 de Agosto de 2025.

## Características

- Diseño elegante y minimalista
- Cuenta regresiva hasta el evento
- Música de fondo desde YouTube
- Carrusel de recuerdos
- Información del evento y ubicación
- Totalmente responsive

## Personalización del evento

Para personalizar la invitación:

1. Reemplaza las imágenes en `src/assets/`
2. Modifica la fecha y hora en `src/components/CountdownTimer.tsx`
3. Actualiza la información del evento en `src/components/CelebrationSection.tsx`
4. Cambia el enlace de música en `src/components/MusicWelcomeModal.tsx`

## Instalación y desarrollo

Si quieres trabajar localmente:

```bash
# Clonar el repositorio
git clone <YOUR_GIT_URL>

# Navegar al directorio
cd <YOUR_PROJECT_NAME>

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la construcción
npm run preview
```

## Despliegue en GitHub Pages

### Método automático (recomendado):
1. Ve a Settings > Pages en tu repositorio de GitHub
2. Selecciona "GitHub Actions" como fuente
3. Los cambios se desplegarán automáticamente

### Método manual:
1. Ejecuta `npm run build`
2. Sube el contenido de la carpeta `dist` a la rama `gh-pages`

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/05ffc8f6-7ad1-4e6e-bbd6-0b2bc1fa4df5) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
