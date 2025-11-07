






function saludar_usuario(nombre) {  
    // Imprime un saludo personalizado.
    // Ejemplo de concatenación y salida por consola.
    console.log(`Hola, ${nombre}! Bienvenido al curso de programación.`);
}


function repetir_texto(texto, veces) {
    // Devuelve una cadena repetida 'veces' veces, separada por espacios.
    // Ejemplo de concatenación y multiplicación de strings.
    return (texto + " ").repeat(veces);
}


function invertir_palabra(palabra) {
    // Invierte una palabra usando slicing.
    return palabra.split("").reverse().join("");
}


function contar_vocales(texto) {
    // Cuenta cuántas vocales (a, e, i, o, u) hay en un texto.
    // Ejemplo de bucles y condicionales.
    let contador = 0;
    for (const letra of texto.toLowerCase()) {
        if (["a", "e", "i", "o", "u"].includes(letra)) {
        contador += 1;
        }
    }
    return contador;
}


function mayusculas_y_minusculas(texto) {
    // Devuelve el texto en mayúsculas y minúsculas.
    // Ejemplo de métodos de string.
    return [texto.toUpperCase(), texto.toLowerCase()];
}


function promedio_lista(numeros) {
    // Calcula el promedio de una lista de números.
    // Ejemplo de bucles y condicionales.
    if (numeros.length === 0) {
        return 0;
    }
    const suma = numeros.reduce((acumulado, actual) => acumulado + actual, 0);
    return suma / numeros.length;
}


function maximo_y_minimo(numeros) {
    // Devuelve el número máximo y mínimo de una lista de números.
    // Ejemplo de métodos de array.
    return [Math.max(...numeros), Math.min(...numeros)];
}


function filtrar_pares(numeros) {
    // Filtra los números pares de una lista.
    // Ejemplo de métodos de array.
    return numeros.filter((numero) => numero % 2 === 0);
}


function sumar_elementos_texto(listaTextos) {
    // Une todos los elementos de una lista de cadenas en una sola frase.
    // Ejemplo de métodos de array.
    return listaTextos.join(" ");
}


function buscar_elemento(lista, elemento) {
    // Busca un elemento en una lista.
    // Ejemplo de métodos de array.
    return lista.includes(elemento);
}


function contar_palabras(frase) {
    // Cuenta cuántas palabras hay en una frase.
    // Ejemplo de métodos de string.
    if (frase.trim() === "") {
        return 0;
    }
    return frase.trim().split(/\s+/).length;
}


function duplicar_elementos(lista) {
    // Duplica los elementos de una lista.
    // Ejemplo de métodos de array.
  return lista.map((numero) => numero * 2);
}



function capitalizar_palabras(frase) {
    // Capitaliza las palabras de una frase.
    // Ejemplo de métodos de string.
    return frase
    .toLowerCase()
    .replace(/\b\w/g, (letra) => letra.toUpperCase());
}


function mezclar_listas(lista1, lista2) {
    // Mezcla dos listas en una nueva lista.
    // Ejemplo de bucles y condicionales.
    const combinada = [];
    const longitud = Math.min(lista1.length, lista2.length);
    for (let i = 0; i < longitud; i += 1) {
        combinada.push(lista1[i]);
        combinada.push(lista2[i]);
    }
    return combinada;
}


function contar_frecuencia(lista) {
    // Cuenta la frecuencia de los elementos de una lista.
    // Ejemplo de métodos de array.
    return lista.reduce((conteo, item) => {
        const clave = String(item);
        if (Object.prototype.hasOwnProperty.call(conteo, clave)) {
        conteo[clave] += 1;
        } else {
        conteo[clave] = 1;
        }
        return conteo;
    }, {});
}

