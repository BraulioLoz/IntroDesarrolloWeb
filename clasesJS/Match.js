class Match {
  #id;
  #localTeam;
  #visitanteTeam;
  #score;
  #date;

  /**
   * Constructor para la Match class
   * @param {string} id 
   * @param {string} localTeam - Equipo local
   * @param {string} visitanteTeam - Equipo visitante
   * @param {string} date 
   */
  constructor(id, localTeam, visitanteTeam, date) {
    this.#id = id;
    this.#localTeam = localTeam;
    this.#visitanteTeam = visitanteTeam;
    this.#score = { local: 0, visitante: 0 };
    this.#date = new Date(date);
  }

  // Getters para los campos privados
  get id() { 
    return this.#id; 
  }

  get localTeam() { 
    return this.#localTeam; 
  }

  get visitanteTeam() { 
    return this.#visitanteTeam; 
  }
  
  get score() { 
    return { ...this.#score }; //recordar que ... es para hacer una copia del objeto
  } //y así no se modifique el original, es para tener seguridad en el código :)

  get date() { 
    return this.#date; 
  }

  /**
   * Update score
   * @param {number} localScore - score del local team 
   * @param {number} visitanteScore - score del visitante team
   */
  updateScore(localScore, visitanteScore) {
    this.#score.local = localScore;
    this.#score.visitante = visitanteScore;
  }

  /**
   * Get quien ganó 
   * @returns {string|null} Nombre del equipo que ganó o null si es un draw
   */
  getWinner() {
    if (this.#score.local > this.#score.visitante) {
      return this.#localTeam;
    } else if (this.#score.visitante > this.#score.local) {
      return this.#visitanteTeam;
    }
    return null; // Draw
  }

  /**
   * Verifica si están empatados
   * @returns {boolean} True si están empatados
   */
  isDraw() {
    return this.#score.local === this.#score.visitante;
  }

  /**
   * Get info
   * @returns {Object} info
   */
  getInfo() {
    return {
      id: this.#id,
      localTeam: this.#localTeam,
      visitanteTeam: this.#visitanteTeam,
      score: { ...this.#score }, // get una copia del objeto score para no modificar el original
      date: this.#date.toISOString(),
      winner: this.getWinner(),
      isDraw: this.isDraw()
    };
  }
}

// Para poder usar la clase en otros files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Match;
}

// Ejemplo de uso:
/*
const match = new Match('001', 'Chivas', 'Pumas', '2025-10-5');
console.log(match.getInfo());
match.updateScore(2, 1);
console.log(match.getWinner()); // "Chivas" :D
console.log(match.isDraw()); // false
*/
