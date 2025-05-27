# Lib HeroUI

Una librería de componentes React construida sobre HeroUI con optimizaciones de peso.

## 📦 Instalación

```bash
npm install lib-heroui
```

### Dependencias Requeridas (Peer Dependencies)

Esta librería requiere que instales las siguientes dependencias en tu proyecto:

```bash
npm install react react-dom @heroui/react @heroui/system @heroui/theme framer-motion tailwindcss
```

## 🚀 Uso Básico

### 1. Configurar HeroUI Provider

```tsx
import React from 'react';
import { HeroUIProvider } from '@heroui/react';
import { ButtonPrueba } from 'lib-heroui';

function App() {
  return (
    <HeroUIProvider>
      <div className="light text-foreground bg-background">
        <ButtonPrueba color="primary">
          Mi Botón
        </ButtonPrueba>
      </div>
    </HeroUIProvider>
  );
}
```

### 2. Configurar Tailwind CSS

Agrega el plugin de HeroUI a tu `tailwind.config.js`:

```js
const { heroui } = require("@heroui/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
```

### 3. Importar estilos CSS (opcional)

Si quieres usar los estilos base de Tailwind:

```css
/* En tu archivo CSS principal */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📊 Optimizaciones de Peso

Esta librería está optimizada para minimizar el bundle size:

- **Peer Dependencies**: HeroUI, React y Framer Motion son peer dependencies
- **Tree Shaking**: Solo importa los componentes que uses
- **CSS Separado**: Los estilos CSS no se incluyen automáticamente
- **Externalizadas**: Todas las dependencias grandes están externalizadas

### Tamaños de Bundle

- **ES Module**: ~2-5KB (sin dependencias)
- **UMD**: ~3-7KB (sin dependencias)
- **CSS**: Los estilos vienen de HeroUI directamente

## 🎨 Componentes Disponibles

### ButtonPrueba

```tsx
import { ButtonPrueba } from 'lib-heroui';

<ButtonPrueba 
  variant="solid" 
  color="primary" 
  size="md"
  loading={false}
  disabled={false}
  fullWidth={false}
  startIcon={<Icon />}
  endIcon={<Icon />}
  onClick={() => console.log('clicked')}
>
  Texto del botón
</ButtonPrueba>
```

#### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'bordered' \| 'light' \| 'flat' \| 'faded' \| 'shadow' \| 'ghost'` | `'solid'` | Estilo visual del botón |
| `color` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Color del tema |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño del botón |
| `loading` | `boolean` | `false` | Estado de carga |
| `disabled` | `boolean` | `false` | Estado deshabilitado |
| `fullWidth` | `boolean` | `false` | Ancho completo |
| `startIcon` | `ReactNode` | - | Icono al inicio |
| `endIcon` | `ReactNode` | - | Icono al final |

## 🛠️ Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo con Storybook
npm run storybook

# Build
npm run build

# Analizar bundle
npm run analyze
```

## 📄 Licencia

MIT
