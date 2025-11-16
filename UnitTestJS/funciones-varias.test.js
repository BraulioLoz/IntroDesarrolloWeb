const {
    isEven,
    esPalindromo,
    contarLetra,
    rotarPalabra,
    validarEmail,
    romanoADecimal,
} = require("./funciones-varias.js");

test("isEven: .toBeTruthy y .toBeFalsy", () => {
    expect(isEven(4)).toBeTruthy(); 
    expect(isEven(3)).toBeFalsy();
    expect(isEven(NaN)).toBeFalsy();
});

test("validarEmail: .toBeTruthy y .toBeFalsy", () => {
    expect(validarEmail("a@b.com")).toBeTruthy();
    expect(validarEmail("abc")).toBeFalsy();
});

test("esPalindromo: .toBeTruthy y .toBeFalsy con normalización", () => {
    expect(esPalindromo("1001001")).toBeTruthy(); // Es el 73! Num Favorito de Sheldon Cooper
    expect(esPalindromo("Hola mundo")).toBeFalsy();
});

test("rotarPalabra: .toEqual con strings esperados", () => {
    expect(rotarPalabra("hola", 1)).toEqual("ahol");
    expect(rotarPalabra("abcd", 2)).toEqual("cdab");
    expect(rotarPalabra("abcd", -1)).toEqual("bcda");
});

test("contarLetra: .toEqual con conteos numéricos", () => {
    expect(contarLetra("banana", "a")).toEqual(3);
    expect(contarLetra("banana", "b")).toEqual(1);
});

test(".toStrictEqual diferencia objetos con/ sin propiedades undefined", () => {
    const a = { h: 1, o: 1, l: 1, a: 1 };
    const b = { h: 1, o: 1, l: 1, a: 1, x: undefined };
    expect(a).not.toStrictEqual(b);
    expect(a).toStrictEqual({ h: 1, o: 1, l: 1, a: 1 });
});

test(".toBeNull cuando no hay coincidencias de regex", () => {
    const match = "abc".match(/z/);
    expect(match).toBeNull();
});

test(".toBeUndefined cuando una propiedad no existe", () => {
    const obj = { a: 1 };
    expect(obj.b).toBeUndefined();
});

test("romanoADecimal: .toThrow para casos inválidos", () => {
    expect(() => romanoADecimal("")).toThrow("Parámetros inválidos");
    expect(() => romanoADecimal("A")).toThrow("Parámetros inválidos"); // carácter inválido
});

test("romanoADecimal: convierte romano a decimal", () => {
    expect(romanoADecimal("I")).toBe(1);
    expect(romanoADecimal("V")).toBe(5);
    expect(romanoADecimal("IX")).toBe(9);
    expect(romanoADecimal("LVIII")).toBe(58);
    expect(romanoADecimal("MCMXCIV")).toBe(1994);
});


