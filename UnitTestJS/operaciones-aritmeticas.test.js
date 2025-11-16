const { sumar, restar, multiplicar, dividir, modulo, operar } = require("./operaciones-aritmeticas.js");

test("Debe sumar dos números correctamente", () => {
    expect(sumar(2, 3)).toBe(5);
    expect(sumar(0.2, 0.2)).toBe(0.4);
});

test("Debe restar dos números correctamente", () => {
    expect(restar(2, 3)).toBe(-1);
    expect(restar(10, 7)).toBe(3);
});

test("Debe multiplicar dos números correctamente", () => {
    expect(multiplicar(2, 4)).toBe(8);
    expect(multiplicar(0, 10)).toBe(0);
});

test("Debe lanzar un error al dividir entre cero", () => {
try {
    dividir(10, 0);
} catch (e) {
    expect(e.message).toBe("No se puede dividir entre cero :(");
}
});

test("Usando expect.toThrow() para verificar errores", () => {
    expect(() => dividir(10, 0)).toThrow("No se puede dividir entre cero :(");
});

test("Debe calcular el módulo de dos números correctamente", () => {
    expect(modulo(10, 3)).toBe(1);
    expect(modulo(11,3)).toBe(2);
    expect(modulo(10, 10)).toBe(0);
});

test("Debe seleccionar la operación correcta", () => {
    expect(operar(10, 6, "sumar")).toBe(16);
    expect(operar(2, 3, "restar")).toBe(-1);
    expect(operar(2, 3, "multiplicar")).toBe(6);
    expect(operar(6, 3, "dividir")).toBe(2);
    expect(operar(2, 3, "modulo")).toBe(2);
});