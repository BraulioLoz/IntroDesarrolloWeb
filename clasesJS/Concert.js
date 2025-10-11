class Concert {
  #id;
  #lugar;
  #date;
  #capacidad;
  #ticketsSold;

  /**
   * Constructor para la Concert class
   * @param {string} id 
   * @param {string} lugar 
   * @param {string} date 
   * @param {number} capacidad 
   */
  constructor(id, lugar, date, capacidad) {
    this.#id = id;
    this.#lugar = lugar;
    this.#date = new Date(date);
    this.#capacidad = capacidad;
    this.#ticketsSold = 0;
  }

  // Getters para los campos privados
  get id() { 
    return this.#id; 
  }

  get lugar() { 
    return this.#lugar; 
  }

  get date() { 
    return this.#date; 
  }

  get capacidad() { 
    return this.#capacidad; 
  }

  get ticketsSold() { 
    return this.#ticketsSold; 
  }

  /**
   * Vender tickets 
   * @param {number} cuantos - Número de tickets a vender
   * @returns {boolean} True if successful
   */
  sellTickets(cuantos) {
    if (this.#ticketsSold + cuantos <= this.#capacidad) {
      this.#ticketsSold += cuantos;
      return true;
    }
    return false;
  }

  /**
   * Obtener cuántos tickets quedan disponibles
   * @returns {number} Tickets disponibles
   */
  getAvailableTickets() {
    return this.#capacidad - this.#ticketsSold;
  }

  /**
   * Verifica si el concierto ya está lleno
   * @returns {boolean} True if está lleno
   */
  isSoldOut() {
    return this.#ticketsSold >= this.#capacidad;
  }

  /**
   * Info del concierto
   * @returns {Object} info
   */
  getInfo() {
    return {
      id: this.#id,
      lugar: this.#lugar,
      date: this.#date.toISOString(),
      capacidad: this.#capacidad,
      ticketsSold: this.#ticketsSold,
      availableTickets: this.getAvailableTickets(),
      isSoldOut: this.isSoldOut()
    };
  }
}

// Para poder usar la clase en otros files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Concert;
}

// Ejemplo de uso:
/*
const concert = new Concert('001', 'Estadio GNP', '2024-12-15', 65000);
console.log(concert.getInfo()); // { id: '001', lugar: 'Estadio GNP', date: '2024-12-15T00:00:00.000Z', capacidad: 65000, ticketsSold: 0, availableTickets: 65000, isSoldOut: false }
console.log(concert.sellTickets(15000)); // true
console.log(concert.isSoldOut()); // false
console.log(concert.getAvailableTickets()); // 50000
console.log(concert.getInfo()); // { id: '001', lugar: 'Estadio GNP', date: '2024-12-15T00:00:00.000Z', capacidad: 65000, ticketsSold: 15000, availableTickets: 50000, isSoldOut: false }
*/
