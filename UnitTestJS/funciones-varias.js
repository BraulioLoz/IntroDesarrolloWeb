function isEven(n) {
    if (typeof n !== "number" || !Number.isFinite(n)) return false;
    return n % 2 === 0;
}

function esPalindromo(texto) {
    if (typeof texto !== "string") {
        return false;
    }
    const normalizado = texto.toLowerCase().replace(/\s+/g, "");
    const invertido = normalizado.split("").reverse().join("");
    return normalizado === invertido;
}

function contarLetra(texto, letra) {
    if (typeof texto !== "string" || typeof letra !== "string" || letra.length !== 1) {
        throw new Error("Parámetros inválidos");
    }
    let conteo = 0;
    for (const l of texto) {
        if (l === letra) conteo += 1;
    }
    return conteo;
}

function rotarPalabra(palabra, k) {
    if (typeof palabra !== "string") {
        throw new Error("Parámetros inválidos");
    }
    const len = palabra.length;
    if (len === 0) {
        return "";
    }
    let pasos = k % len;
    if (pasos < 0) { // Para manejo de k negativos :)
        pasos = pasos + len;
    }
    const splitIndex = len - pasos;
    return palabra.slice(splitIndex) + palabra.slice(0, splitIndex);
}

function validarEmail(email) {
    if (typeof email !== "string") {
        return false;
    }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function romanoADecimal(romano) {
    if (typeof romano !== "string") {
        throw new Error("Parámetros inválidos");
    }
    if (romano.length === 0) {
        throw new Error("Parámetros inválidos");
    }
    if (!/^[IVXLCDM]+$/.test(romano)) { // Solo se permiten I, V, X, L, C, D, M
        throw new Error("Parámetros inválidos");
    }
    const valores = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let total = 0;
    let anterior = 0;

    // Recorremos de derecha a izquierda
    for (let i = romano.length - 1; i >= 0; i--) {
        const letra = romano[i].toUpperCase();
        const valor = valores[letra];

        if (valor < anterior) {
            total -= valor; // V < 1
        } else {
            total += valor; // I < V
        }
        anterior = valor;
    }
    return total;
}
module.exports = {
    isEven,
    esPalindromo,
    contarLetra,
    rotarPalabra,
    validarEmail,
    romanoADecimal,
};


