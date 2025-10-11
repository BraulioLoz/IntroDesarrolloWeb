# SessionStorage

## Qué es

`sessionStorage` es una API de Web Storage que permite almacenar pares clave-valor localmente dentro de la sesión del navegador del usuario. Proporciona una forma de almacenar datos que persisten durante la duraciónde la sesión de la página, pero se borran cuando se cierra la página o se crea una nueva session cuando se inicia otra véz sesión o se abre otra vez la página. (Toma entre 5 y 10 MB de espacio)

### Características Principales

- **Solo en sesión**: Los datos persisten solo para la sesión actual de la página
- **Limpieza automática**: Los datos se eliminan automáticamente cuando se cierra la página
- **Aislamiento por pestaña**: Cada pestaña del navegador tiene su propio sessionStorage separado+

## Propiedades y Métodos

### Métodos Principales

| Método                 | Descripción                        | Sintaxis                                     |
| ----------------------- | ----------------------------------- | -------------------------------------------- |
| `setItem(key, value)` | Almacenar datos en sessionStorage   | `sessionStorage.setItem("key", "value")`   |
| `getItem(key)`        | Recuperar datos de sessionStorage   | `var data = sessionStorage.getItem("key")` |
| `removeItem(key)`     | Eliminar elemento específico       | `sessionStorage.removeItem("key")`         |
| `clear()`             | Limpiar todos los datos almacenados | `sessionStorage.clear()`                   |
| `key(index)`          | Obtener clave por índice           | `var key = sessionStorage.key(0)`          |
| `length`              | Número de elementos almacenados    | `sessionStorage.length`                    |

## Estructura

### Formato de Almacenamiento de Datos

- Pares clave-valor.
- Solo strings.
- Las claves son case-sensitive.

### Sintaxis Básica

```javascript
// Almacenar datos
sessionStorage.setItem("username", "Breikdwn");
sessionStorage.setItem("theme", "dark");

// Recuperar datos
var username = sessionStorage.getItem("username"); // "Breidkwn"
var theme = sessionStorage.getItem("theme"); // "dark"

// Eliminar elemento específico
sessionStorage.removeItem("username");

// Limpiar todos los datos
sessionStorage.clear();

// Verificar longitud
console.log(sessionStorage.length); // 0
```

## Diferencias: localStorage vs sessionStorage

| Característica       | sessionStorage                      | localStorage                                          |
| --------------------- | ----------------------------------- | ----------------------------------------------------- |
| **Permanencia** | Se borra al cerrar pestaña/ventana | Se queda hasta ser borrado manualmente                |
| **Aislamiento** | Por pestaña/ventana (aislado)      | Compartido entre todas las pestañas del mismo origen |

### Cuándo Usar Cada Uno

**sessionStorage:**

- Datos temporales de formularios
- Contenido del carrito de compras
- Estado específico de página
- Funcionalidad de auto-guardado
- Progreso de formularios multi-paso

**localStorage:**

- Preferencias y configuraciones de usuario
- Selecciones de tema
- Preferencias de idioma
- Datos de aplicación en caché
- Almacenamiento de datos offline

## Ejemplos Prácticos

### 1. Almacenamiento y Recuperación Básica

```javascript
// Almacenar datos de usuario
sessionStorage.setItem("userId", "12345");
sessionStorage.setItem("userRole", "admin");

// Recuperar datos de usuario
const userId = sessionStorage.getItem("userId");
const userRole = sessionStorage.getItem("userRole");

console.log(`Usuario ${userId} tiene rol: ${userRole}`);
```

### 2. Almacenar y Recuperar Objetos

```javascript
// Almacenar un objeto 
const userData = {
  name: "Datalab",
  email: "datalabitam@gmail.com",
  preferences: {
    theme: "dark",
    language: "en"
  }
};

// Convertir objeto a string antes de almacenar
sessionStorage.setItem("userData", JSON.stringify(userData));

// Recuperar y parsear objeto
const retrievedData = JSON.parse(sessionStorage.getItem("userData"));
console.log(retrievedData.name); // "Datalab"
```

### 3. Ejemplo de Carrito de Compras

```javascript
// Agregar artículo al carrito
function addToCart(productId, quantity) {
  let cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity: quantity });
  }
  
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

// Obtener contenido del carrito
function getCart() {
  return JSON.parse(sessionStorage.getItem("cart") || "[]");
}

// Limpiar carrito
function clearCart() {
  sessionStorage.removeItem("cart");
}
```

## Mejores Prácticas

1. **Siempre verificar disponibilidad** antes de usar sessionStorage
2. **Serializar objetos** usando JSON.stringify() antes de almacenar (Serializar es convertir cualquier datatype a string)
3. **Manejar errores** cuando se excede la cuota de almacenamiento
4. **Usar claves significativas** para mejor legibilidad del código
5. **Limpiar datos innecesarios** cuando sea apropiado
6. **Considerar el tamaño de los datos** (límite de 5 a 10 MB)

## Referencias

- [MDN Web Docs - Window.sessionStorage](https://developer.mozilla.org/es/docs/Web/API/Window/sessionStorage)
- [MDN Web Docs - Usando la API de Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
