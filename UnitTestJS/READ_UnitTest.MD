Jest: matchers comunes con ejemplos rápidos

.toEqual()
- Compara igualdad de valores en profundidad (objetos/arrays).
  Ejemplo:
  ```js
  expect({ a: 1, b: [2, 3] }).toEqual({ a: 1, b: [2, 3] });
  ```

.toBeTruthy()
- Pasa si el valor se evalúa como verdadero (truthy).
  ```js
  expect(1).toBeTruthy();
  expect("hola").toBeTruthy();
  ```

.toBeFalsy()
- Pasa si el valor se evalúa como falso (falsy).
  ```js
  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  ```

.toBeNull()
- Pasa si el valor es exactamente null.
  ```js
  const match = "abc".match(/z/);
  expect(match).toBeNull();
  ```

.toBeUndefined()
- Pasa si el valor es exactamente undefined.
  ```js
  const obj = {};
  expect(obj.sinProp).toBeUndefined();
  ```

.toThrow()
- Verifica que una función lance un error (usa función envolvente).
  ```js
  expect(() => JSON.parse("{invalido}")).toThrow();
  expect(() => { throw new Error("X"); }).toThrow("X");
  ```

.toStrictEqual()
- Igual que toEqual pero más estricto: diferencia entre propiedades undefined presentes/ausentes, tipos, y prototipos.
  ```js
  expect({ a: 1 }).toStrictEqual(Object.assign({}, { a: 1 }));
  expect({ a: undefined }).not.toStrictEqual({}); // propiedad presente vs ausente
  ```

