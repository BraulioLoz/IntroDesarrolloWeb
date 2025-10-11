# Clases en JavaScript

## Estructura básica

En JavaScript las clases son una plantilla general para crear objetos - es programación orientada a objetos.

De las clases se pueden crear instancias (ejemplos específicos de objetos) y estos heredarán las propiedades y métodos de las clases.

Una clase en JavaScript se define usando la palabra "***class***". Dentro de esto, los métodos y atributos serán declarados en el cuerpo, mientras que el constructor pone los valores iniciales.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Crear una instancia de la clase
const miAnimal = new Animal("Fido");
miAnimal.speak(); // "Fido makes a sound."
```

En este caso, la clase es Animal y tiene un atributo de nombre y un método speak.

## Crear Instancias

Para crear una instancia de una clase, usamos la palabra clave `new` seguida del nombre de la clase y los parámetros del constructor entre paréntesis.

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  
  presentarse() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
  }
}

// Crear múltiples instancias
const persona1 = new Persona("Ana", 25);
const persona2 = new Persona("Carlos", 30);

console.log(persona1.presentarse()); // "Hola, soy Ana y tengo 25 años"
console.log(persona2.presentarse()); // "Hola, soy Carlos y tengo 30 años"

// Cada instancia es independiente
console.log(persona1.nombre); // "Ana"
console.log(persona2.nombre); // "Carlos"
```

## Constructor

El constructor es un método especial que se ejecuta automáticamente cuando se crea una nueva instancia de la clase. Se utiliza para inicializar las propiedades del objeto.

```javascript
class Producto {
  constructor(nombre, precio, categoria = "General") {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria; // Valor por defecto
    this.id = Math.random().toString(36).substr(2, 9); // ID único
  }
  
  obtenerInfo() {
    return `${this.nombre} - $${this.precio} (${this.categoria})`;
  }
}

const producto1 = new Producto("Laptop", 1200, "Electrónicos");
const producto2 = new Producto("Libro", 25); // Usa valor por defecto

console.log(producto1.obtenerInfo()); // "Laptop - $1200 (Electrónicos)"
console.log(producto2.obtenerInfo()); // "Libro - $25 (General)"
```

## Métodos

Los métodos son funciones que pertenecen a una clase y pueden acceder a las propiedades de la instancia usando `this`.

```javascript
class Calculadora {
  constructor() {
    this.resultado = 0;
    this.historial = [];
  }
  
  // Método con parámetros
  sumar(numero) {
    this.resultado += numero;
    this.historial.push(`+${numero}`);
    return this;
  }
  
  restar(numero) {
    this.resultado -= numero;
    this.historial.push(`-${numero}`);
    return this;
  }
  
  // Método que retorna un valor
  obtenerResultado() {
    return this.resultado;
  }
  
  // Método sin parámetros
  limpiar() {
    this.resultado = 0;
    this.historial = [];
    return this;
  }
  
  mostrarHistorial() {
    return this.historial.join(' ');
  }
}

const calc = new Calculadora();
calc.sumar(10).restar(3).sumar(5);
console.log(calc.obtenerResultado()); // 12
console.log(calc.mostrarHistorial()); // "+10 -3 +5"
```

## Herencia

La herencia permite que una clase herede propiedades y métodos de otra clase usando la palabra clave `extends`. La clase hija puede sobrescribir métodos del padre y agregar nuevos métodos.

```javascript
// Clase padre
class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.encendido = false;
  }
  
  encender() {
    this.encendido = true;
    return `${this.marca} ${this.modelo} encendido`;
  }
  
  apagar() {
    this.encendido = false;
    return `${this.marca} ${this.modelo} apagado`;
  }
  
  obtenerInfo() {
    return `${this.año} ${this.marca} ${this.modelo}`;
  }
}

// Clase hija que extiende Vehiculo
class Automovil extends Vehiculo {
  constructor(marca, modelo, año, puertas) {
    super(marca, modelo, año); // Llama al constructor del padre
    this.puertas = puertas;
    this.velocidad = 0;
  }
  
  acelerar(velocidad) {
    if (this.encendido) {
      this.velocidad += velocidad;
      return `Acelerando a ${this.velocidad} km/h`;
    }
    return "Primero enciende el vehículo";
  }
  
  // Sobrescribir método del padre
  obtenerInfo() {
    return `${super.obtenerInfo()} con ${this.puertas} puertas`;
  }
}

// Clase hija adicional
class Motocicleta extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
    super(marca, modelo, año);
    this.cilindrada = cilindrada;
  }
  
  hacerWheelie() {
    if (this.encendido) {
      return "¡Wheelie exitoso!";
    }
    return "Primero enciende la moto";
  }
}

// Uso de las clases
const auto = new Automovil("Toyota", "Corolla", 2023, 4);
const moto = new Motocicleta("Honda", "CBR600", 2022, "600cc");

console.log(auto.encender()); // "Toyota Corolla encendido"
console.log(auto.acelerar(50)); // "Acelerando a 50 km/h"
console.log(auto.obtenerInfo()); // "2023 Toyota Corolla con 4 puertas"

console.log(moto.hacerWheelie()); // "Primero enciende la moto"
console.log(moto.encender()); // "Honda CBR600 encendido"
console.log(moto.hacerWheelie()); // "¡Wheelie exitoso!"
```

## Propiedades y Métodos Estáticos

Los miembros estáticos pertenecen a la clase misma, no a las instancias. Se acceden directamente desde la clase usando la palabra clave `static`.

```javascript
class Matematicas {
  // Propiedad estática
  static PI = 3.14159;
  static E = 2.71828;
  
  // Método estático
  static sumar(a, b) {
    return a + b;
  }
  
  static multiplicar(a, b) {
    return a * b;
  }
  
  // Método estático que usa otra propiedad estática
  static areaCirculo(radio) {
    return Matematicas.PI * radio * radio;
  }
  
  // Método de instancia (no estático)
  constructor(valor) {
    this.valor = valor;
  }
  
  obtenerValor() {
    return this.valor;
  }
}

// Usar métodos y propiedades estáticas
console.log(Matematicas.PI); // 3.14159
console.log(Matematicas.sumar(5, 3)); // 8
console.log(Matematicas.areaCirculo(5)); // 78.54

// No se puede acceder a métodos estáticos desde instancias
const math = new Matematicas(10);
console.log(math.obtenerValor()); // 10
// console.log(math.sumar(1, 2)); // Error: math.sumar is not a function
```

### Cuándo usar estáticos vs instancias:

```javascript
class Utilidades {
  static formatearFecha(fecha) {
    return fecha.toLocaleDateString('es-ES');
  }
  
  static generarId() {
    return Math.random().toString(36).substr(2, 9);
  }
  
  static validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

class Usuario {
  constructor(nombre, email) {
    this.id = Utilidades.generarId(); // Usar método estático
    this.nombre = nombre;
    this.email = email;
    this.fechaCreacion = new Date();
  }
  
  // Método de instancia que usa método estático
  obtenerInfo() {
    return {
      id: this.id,
      nombre: this.nombre,
      email: this.email,
      fecha: Utilidades.formatearFecha(this.fechaCreacion)
    };
  }
}

// Validar email antes de crear usuario
const email = "usuario@ejemplo.com";
if (Utilidades.validarEmail(email)) {
  const usuario = new Usuario("Juan", email);
  console.log(usuario.obtenerInfo());
}
```

## Getters y Setters

Los getters y setters permiten definir métodos que se comportan como propiedades, proporcionando control sobre el acceso y modificación de datos.

```javascript
class CuentaBancaria {
  constructor(titular, saldoInicial = 0) {
    this._titular = titular;
    this._saldo = saldoInicial;
    this._historial = [];
  }
  
  // Getter para el saldo
  get saldo() {
    return this._saldo;
  }
  
  // Getter para el titular
  get titular() {
    return this._titular;
  }
  
  // Setter para el titular con validación
  set titular(nuevoTitular) {
    if (typeof nuevoTitular !== 'string' || nuevoTitular.trim().length === 0) {
      throw new Error('El titular debe ser una cadena no vacía');
    }
    this._titular = nuevoTitular.trim();
  }
  
  // Getter computado para el historial
  get historial() {
    return [...this._historial]; // Retorna una copia para proteger los datos
  }
  
  // Setter para depósitos
  set deposito(cantidad) {
    if (cantidad <= 0) {
      throw new Error('La cantidad debe ser positiva');
    }
    this._saldo += cantidad;
    this._historial.push({
      tipo: 'deposito',
      cantidad: cantidad,
      fecha: new Date()
    });
  }
  
  // Método para retiros
  retirar(cantidad) {
    if (cantidad <= 0) {
      throw new Error('La cantidad debe ser positiva');
    }
    if (cantidad > this._saldo) {
      throw new Error('Fondos insuficientes');
    }
    this._saldo -= cantidad;
    this._historial.push({
      tipo: 'retiro',
      cantidad: cantidad,
      fecha: new Date()
    });
  }
}

// Uso de getters y setters
const cuenta = new CuentaBancaria("Arindal Contreras", 1000);

// Usar getters como propiedades
console.log(cuenta.saldo); // 1000
console.log(cuenta.titular); // "Arindal Contreras"

// Usar setter para depositar
cuenta.deposito = 500; // Usa el setter
console.log(cuenta.saldo); // 1500

// Cambiar titular usando setter
cuenta.titular = "Ari Cont";
console.log(cuenta.titular); // "Ari Cont"

// Acceder al historial (getter retorna copia)
console.log(cuenta.historial.length); // 1

cuenta.retirar(200);
console.log(cuenta.saldo); // 1300
console.log(cuenta.historial.length); // 2
```

## Campos Privados

Los campos privados permiten crear propiedades que solo son accesibles dentro de la clase, proporcionando verdadera encapsulación.

```javascript
class Empleado {
  // Campos privados (solo accesibles dentro de la clase)
  #nombre;
  #salario;
  #departamento;
  #idEmpleado;
  
  // Campo privado estático
  static #contadorEmpleados = 0;
  
  constructor(nombre, salario, departamento) {
    this.#nombre = nombre;
    this.#salario = salario;
    this.#departamento = departamento;
    this.#idEmpleado = ++Empleado.#contadorEmpleados;
  }
  
  // Métodos públicos para acceder a campos privados
  get nombre() {
    return this.#nombre;
  }
  
  get salario() {
    return this.#salario;
  }
  
  get departamento() {
    return this.#departamento;
  }
  
  // Método privado
  #calcularImpuestos() {
    return this.#salario * 0.16; // 16% de impuestos
  }
  
  // Método público que usa método privado
  obtenerSalarioNeto() {
    const impuestos = this.#calcularImpuestos();
    return this.#salario - impuestos;
  }
  
  // Método estático que accede a campo privado estático
  static obtenerTotalEmpleados() {
    return Empleado.#contadorEmpleados;
  }
  
  // Método para cambiar salario con validación
  cambiarSalario(nuevoSalario) {
    if (nuevoSalario < 0) {
      throw new Error('El salario no puede ser negativo');
    }
    this.#salario = nuevoSalario;
  }
  
  // Método que accede a campo privado de otra instancia
  esDelMismoDepartamento(otroEmpleado) {
    return this.#departamento === otroEmpleado.#departamento;
  }
}

// Uso de campos privados
const empleado1 = new Empleado("María", 50000, "Desarrollo");
const empleado2 = new Empleado("Carlos", 45000, "Desarrollo");

console.log(empleado1.nombre); // "María"
console.log(empleado1.obtenerSalarioNeto()); // 42000

// No se puede acceder directamente a campos privados
// console.log(empleado1.#salario); // Error: Private field '#salario' must be declared in an enclosing class

// Verificar si son del mismo departamento
console.log(empleado1.esDelMismoDepartamento(empleado2)); // true

console.log(Empleado.obtenerTotalEmpleados()); // 2
```

### Ventajas de los campos privados:

```javascript
class Producto {
  #precio;
  #descuento = 0;
  
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.#precio = precio;
  }
  
  // Control total sobre el precio
  get precio() {
    return this.#precio;
  }
  
  // Solo se puede cambiar el precio a través de métodos controlados
  aplicarDescuento(porcentaje) {
    if (porcentaje < 0 || porcentaje > 100) {
      throw new Error('El descuento debe estar entre 0 y 100%');
    }
    this.#descuento = porcentaje;
  }
  
  obtenerPrecioFinal() {
    return this.#precio * (1 - this.#descuento / 100);
  }
  
  // Método privado para validar cambios de precio
  #esPrecioValido(precio) {
    return precio > 0 && precio < 1000000;
  }
  
  cambiarPrecio(nuevoPrecio) {
    if (!this.#esPrecioValido(nuevoPrecio)) {
      throw new Error('Precio inválido');
    }
    this.#precio = nuevoPrecio;
  }
}

const producto = new Producto("Laptop", 1000);
producto.aplicarDescuento(10);
console.log(producto.obtenerPrecioFinal()); // 900

// No se puede acceder ni modificar directamente
// producto.#precio = 500; // Error
// console.log(producto.#descuento); // Error
```

## Expresiones de Clase

Las expresiones de clase permiten definir clases de manera más flexible, especialmente útil cuando necesitas crear clases dinámicamente.

```javascript
// Expresión de clase nombrada
const Persona = class PersonaHumana {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  
  presentarse() {
    return `Soy ${this.nombre}`;
  }
};

// Expresión de clase anónima
const Animal = class {
  constructor(tipo, nombre) {
    this.tipo = tipo;
    this.nombre = nombre;
  }
  
  hacerSonido() {
    return `${this.nombre} hace un sonido`;
  }
};

// Uso de expresiones de clase
const persona = new Persona("Juan", 30);
const animal = new Animal("Perro", "Max");

console.log(persona.presentarse()); // "Soy Juan"
console.log(animal.hacerSonido()); // "Max hace un sonido"
```

### Expresiones de clase con factory functions:

```javascript
// Función que retorna una clase personalizada
function crearClaseVehiculo(tipo) {
  return class {
    constructor(marca, modelo) {
      this.tipo = tipo;
      this.marca = marca;
      this.modelo = modelo;
    }
  
    obtenerInfo() {
      return `${this.tipo}: ${this.marca} ${this.modelo}`;
    }
  };
}

// Crear clases dinámicamente
const Automovil = crearClaseVehiculo("Automóvil");
const Motocicleta = crearClaseVehiculo("Motocicleta");

const auto = new Automovil("Toyota", "Corolla");
const moto = new Motocicleta("Honda", "CBR");

console.log(auto.obtenerInfo()); // "Automóvil: Toyota Corolla"
console.log(moto.obtenerInfo()); // "Motocicleta: Honda CBR"
```

### Expresiones de clase como parámetros:

```javascript
// Función que acepta una clase como parámetro
function crearInstancia(ClaseConstructor, ...args) {
  return new ClaseConstructor(...args);
}

// Definir múltiples clases
const Estudiante = class {
  constructor(nombre, semestre) {
    this.nombre = nombre;
    this.grado = semestre;
  }
};

const Profesor = class {
  constructor(nombre, materia) {
    this.nombre = nombre;
    this.materia = materia;
  }
};

// Usar la función factory
const estudiante = crearInstancia(Estudiante, "Braulio Lozano", "7mo");
const profesor = crearInstancia(Profesor, "Silvia Guardatti", "AyP");

console.log(estudiante); // { nombre: "Braulio Lozano", semestre: "7mo" }
console.log(profesor); // { nombre: "Silvia Guardatti", materia: "AyP" }
```

## Buenas Prácticas

### Convenciones de Nomenclatura


```javascript
// ✅ Buenos nombres de clase (PascalCase)
class UsuarioManager { }
class CalculadoraAvanzada { }
class ProductoServicio { }

// ❌ Evitar nombres confusos
class userManager { } // debe ser PascalCase
class calculadora_avanzada { } // usar camelCase en propiedades
class Producto_Servicio { } // inconsistente
```

### Cuándo usar Clases vs Funciones

```javascript
// ✅ Usar clases cuando tengas:
// - Múltiples instancias con estado compartido
// - Comportamiento complejo que requiere encapsulación
// - Herencia y polimorfismo

class GestorInventario {
  constructor() {
    this.productos = new Map();
  }
  
  agregarProducto(producto) {
    this.productos.set(producto.id, producto);
  }
  
  obtenerProducto(id) {
    return this.productos.get(id);
  }
  
  obtenerTotal() {
    return this.productos.size;
  }
}

// ✅ Usar funciones para operaciones simples
function calcularPrecioTotal(precio, cantidad, descuento = 0) {
  return (precio * cantidad) * (1 - descuento / 100);
}
```

### Patrones Comunes

```javascript
// ✅ Singleton Pattern
class Configuracion {
  static instancia;
  
  constructor() {
    if (Configuracion.instancia) {
      return Configuracion.instancia;
    }
  
    this.apiUrl = 'https://api.ejemplo.com';
    this.timeout = 5000;
    Configuracion.instancia = this;
  }
  
  static obtenerInstancia() {
    if (!Configuracion.instancia) {
      Configuracion.instancia = new Configuracion();
    }
    return Configuracion.instancia;
  }
}

// ✅ Factory Pattern
class VehiculoFactory {
  static crearVehiculo(tipo, ...args) {
    switch (tipo.toLowerCase()) {
      case 'auto':
        return new Automovil(...args);
      case 'moto':
        return new Motocicleta(...args);
      case 'camion':
        return new Camion(...args);
      default:
        throw new Error(`Tipo de vehículo no soportado: ${tipo}`);
    }
  }
}

// ✅ Observer Pattern
class EventEmitter {
  constructor() {
    this.eventos = new Map();
  }
  
  on(evento, callback) {
    if (!this.eventos.has(evento)) {
      this.eventos.set(evento, []);
    }
    this.eventos.get(evento).push(callback);
  }
  
  emit(evento, datos) {
    if (this.eventos.has(evento)) {
      this.eventos.get(evento).forEach(callback => callback(datos));
    }
  }
}
```

### Anti-patrones a Evitar

```javascript
// ❌ No hagas esto - Clases muy grandes con muchas responsabilidades
class SuperClase {
  // 50+ métodos y propiedades
  // Múltiples responsabilidades
  // Difícil de mantener y testear
}

// ✅ Mejor - Dividir en clases más pequeñas y específicas, es decir, ABSTRAE lo más que puedas. 
// La abstracción es la mejor práctica  al momento de hacer un desarrollo de Sowftware. 
// Un libro que puede ayudar a entender por qué extraer es mejor a largo plazo es el siguiente (pero es en python)
// https://www.cosmicpython.com/#buy_the_book
class UsuarioService {
  // Solo manejo de usuarios
}

class EmailService {
  // Solo envío de emails
}

class NotificacionService {
  // Solo notificaciones
}

// ❌ No hagas esto - Herencia excesiva
class A extends B { }
class C extends A { }
class D extends C { }
class E extends D { } // Demasiados niveles

// ✅ Mejor - Composición sobre herencia
class Vehiculo {
  constructor(motor, ruedas) {
    this.motor = motor;
    this.ruedas = ruedas;
  }
}

// ❌ No hagas esto - Campos públicos sin control
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio; // Cualquiera puede cambiarlo directamente
  }
}

// ✅ Mejor - Encapsulación con campos privados
class Producto {
  #precio;
  
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.#precio = precio;
  }
  
  cambiarPrecio(nuevoPrecio) {
    if (nuevoPrecio > 0) {
      this.#precio = nuevoPrecio;
    }
  }
}
```

### Métodos de Clase Recomendados

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  
  // ✅ Métodos descriptivos y específicos
  esMayorDeEdad() {
    return this.edad >= 18;
  }
  
  // ✅ Métodos que retornan valores útiles
  obtenerInformacion() {
    return {
      nombre: this.nombre,
      edad: this.edad,
      esMayor: this.esMayorDeEdad()
    };
  }
  
  // ✅ Validación en setters
  set edad(nuevaEdad) {
    if (nuevaEdad < 0 || nuevaEdad > 150) {
      throw new Error('Edad inválida');
    }
    this.edad = nuevaEdad;
  }
  
  // ✅ Métodos estáticos para utilidades
  static compararEdades(persona1, persona2) {
    return persona1.edad - persona2.edad;
  }
  
  // ✅ Métodos que permiten method chaining
  cambiarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
    return this; // Permite chaining
  }
  
  cambiarEdad(nuevaEdad) {
    this.edad = nuevaEdad;
    return this; // Permite chaining
  }
}

// Uso de method chaining
const persona = new Persona("Juan", 25);
persona.cambiarNombre("Juan Carlos").cambiarEdad(26);
```

### Resumen de Conceptos Clave

- **`class`**: Define una plantilla para crear objetos
- **`constructor()`**: Método especial que se ejecuta al crear una instancia
- **`new`**: Operador para crear instancias de una clase
- **`this`**: Referencia al objeto actual dentro de la clase
- **`extends`**: Permite herencia entre clases
- **`super`**: Llama al constructor o métodos de la clase padre
- **`static`**: Define miembros que pertenecen a la clase, no a las instancias
- **`get`/`set`**: Define getters y setters para controlar acceso a propiedades
- **`#`**: Define campos privados
- **Encapsulación**: Ocultar detalles internos y exponer solo lo necesario
- **Herencia**: Reutilizar código de clases existentes
- **Polimorfismo**: Diferentes clases pueden implementar los mismos métodos
