class Artist {
  #id;
  #nombre;
  #genero;
  #popularidad;

  /**
   * Constructor para la Artist class
   * @param {string} id 
   * @param {string} nombre 
   * @param {string} genero 
   * @param {number} popularidad - score (0-100)
   */
  constructor(id, nombre, genero, popularidad = 0) {
    this.#id = id;
    this.#nombre = nombre;
    this.#genero = genero;
    this.#popularidad = popularidad; 
  }

  // Getters para los campos privados
  get id() { 
    return this.#id; 
  }

  get nombre() { 
    return this.#nombre; 
  }
  
  get genero() { 
    return this.#genero; 
  }
  
  get popularidad() { 
    return this.#popularidad; 
  }

  /**
   * Increase popualridad
   * @param {number} points - Cúanto se agregará
   * @returns {number} Nuevo score 
   */
  increasePopularidad(points = 1) {
    this.#popularidad = Math.min(100, this.#popularidad + points);
    return this.#popularidad;
  }

  /**
   * información as object
   * @returns {Object} Artista info
   */
  getInfo() {
    return {
      id: this.#id,
      nombre: this.#nombre,
      genero: this.#genero,
      popularidad: this.#popularidad
    };
  }

  /**
   * Verifica si es popular (tomo en cuenta arriba de 70 puntos)
   * @returns {boolean} True if popular
   */
  isPopular() {
    return this.#popularidad >= 70;
  }
}

// Para poder usar la clase en otros files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Artist;
}

// Ejemplo de uso:
/*
const artist = new Artist('001', 'Andrés Calamaro', 'Rock', 85);
console.log(artist.getInfo()); // { id: '001', nombre: 'Andrés Calamaro', genero: 'Rock', popularidad: 85 }
console.log(artist.isPopular()); // true
artist.increasePopularidad(10);
console.log(artist.popularidad); // 95
*/
