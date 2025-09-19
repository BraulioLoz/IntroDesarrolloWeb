/* Función clásica para multiplicar */
function multiplicarClasico(a, b) {
    return a * b;
}

/* Función arrow para multiplicar */
const multiplicarArrow = (a, b) => a * b;

/* clásica para elevar al cuadrado */
function cuadradoClasico(x) {
    return x * x;
}

/* arrow para elevar al cuadrado */
const cuadradoArrow = x => x * x;


console.log(multiplicarClasico(3, "4")); // 12
console.log(multiplicarArrow("3", 4)); // 12
console.log(multiplicarArrow("3", "4")); // 12
console.log(cuadradoClasico(5)); // 25
console.log(cuadradoArrow("5")); // 25