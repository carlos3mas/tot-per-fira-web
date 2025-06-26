# Imágenes de Productos

Esta carpeta contiene las imágenes de todos los productos de la empresa. Organiza las imágenes en las siguientes subcarpetas:

## 📁 Estructura de carpetas

```
public/images/
├── altavoces/          # Imágenes de altavoces
├── congeladores/       # Imágenes de congeladores
├── hielo/             # Imágenes de sacas de hielo
├── grifos/            # Imágenes de grifos de cerveza
├── barriles/          # Imágenes de barriles de cerveza
└── bebidas/           # Imágenes de bebidas y alcohol
```

## 🖼️ Nombres de archivos requeridos

### Altavoces (`/altavoces/`)
- `altavoz-500w.jpg` - Altavoz Compacto 500W
- `altavoz-1500w.jpg` - Altavoz Profesional 1500W
- `altavoz-4000w.jpg` - Altavoz Concert 4000W

### Congeladores (`/congeladores/`)
- `congelador-pequeno.jpg` - Congelador Pequeño
- `congelador-mediano.jpg` - Congelador Mediano
- `congelador-grande.jpg` - Congelador Grande

### Hielo (`/hielo/`)
- `saca-1.jpg` - 1 saca de hielo
- `sacas-3.jpg` - 3 sacas de hielo
- `sacas-5.jpg` - 5 sacas de hielo

### Grifos (`/grifos/`)
- `grifo-simple.jpg` - Grifo Simple
- `grifo-doble.jpg` - Grifo Doble

### Barriles (`/barriles/`)
- `mahou.jpg` - Barril Mahou
- `estrella-damm.jpg` - Barril Estrella Damm
- `san-miguel.jpg` - Barril San Miguel

### Bebidas (`/bebidas/`)
- `jack-daniels.jpg` - Jack Daniel's
- `johnnie-walker.jpg` - Johnnie Walker
- `jameson.jpg` - Jameson
- `bacardi.jpg` - Bacardi
- `havana-club.jpg` - Havana Club
- `captain-morgan.jpg` - Captain Morgan
- `coca-cola.jpg` - Coca-Cola
- `pepsi.jpg` - Pepsi
- `fanta.jpg` - Fanta

## 📋 Especificaciones recomendadas

- **Formato**: JPG o PNG
- **Tamaño**: Mínimo 800x600px, recomendado 1200x800px
- **Peso**: Máximo 500KB por imagen
- **Calidad**: Buena calidad, pero optimizadas para web

## 🔧 Cómo activar las imágenes

Una vez que hayas añadido las imágenes en las carpetas correspondientes:

1. Ve a cada componente en `app/productos/components/`
2. Busca las líneas comentadas que contienen `<img>`
3. Descomenta esas líneas para activar las imágenes reales
4. Comenta o elimina las líneas del placeholder

### Ejemplo:
```jsx
{/* Placeholder para imagen - se reemplazará con imagen real */}
<div className="text-white text-center">
  <div className="text-4xl mb-2">🔊</div>
  <p className="font-semibold">{altavoz.potencia}</p>
</div>
{/* Cuando tengas la imagen real, descomenta estas líneas:
<img 
  src={altavoz.imagen} 
  alt={altavoz.modelo}
  className="w-full h-full object-cover"
/>
*/}
```

Cambia a:
```jsx
<img 
  src={altavoz.imagen} 
  alt={altavoz.modelo}
  className="w-full h-full object-cover"
/>
```

## 🎯 Consejos

- Asegúrate de que las imágenes tengan un fondo limpio o transparente
- Mantén un estilo visual consistente entre todas las imágenes
- Las imágenes deben mostrar claramente el producto
- Considera añadir marcas de agua si es necesario para protección 