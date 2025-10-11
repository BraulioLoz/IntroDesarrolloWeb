/* 
 * Sistema que gestiona la asistencia física a los labs de comput del Datalab con sessionStorage
 * Los datos se eliminan automáticamente al cerrar la pestaña o sesión
 */

class DatalabAttendance {
    constructor() {
        this.storageKey = 'datalab_attendance';
    }

    /**
     * Añadir asistente
     * @param {string} nombre 
     * @param {string} email 
     * @returns {Object} 
     */
    addAttendee(nombre, email = '') {
        // Validación básica
        if (!nombre || nombre.trim() === '') {
            return { success: false, message: 'El nombre es requerido' };
        }

        const attendees = this.getAllAttendees();
        const nombreLimpio = nombre.trim();

        // Verificar duplicados
        const existe = attendees.find(attendee => 
            attendee.nombre.toLowerCase() === nombreLimpio.toLowerCase()
        );

        if (existe) {
            return { success: false, message: `Ya existe un asistente con el nombre "${nombreLimpio}"` };
        }

        // Crear nuevo asistente
        const nuevoAsistente = {
            id: Date.now(),
            nombre: nombreLimpio,
            email: email.trim(),
            horaEntrada: new Date().toTimeString().slice(0, 5),
            fecha: new Date().toISOString().slice(0, 10)
        };

        // Agregar y guardar
        attendees.push(nuevoAsistente);
        this.saveAttendees(attendees);

        return { 
            success: true, 
            message: `Asistente "${nombreLimpio}" registrado exitosamente`,
            data: nuevoAsistente
        };
    }

    /**
     * Eliminar asistente
     * @param {string|number} identifier - Nombre o ID del asistente
     * @returns {Object} 
     */
    removeAttendee(identifier) {
        const attendees = this.getAllAttendees();
        
        // Buscar por ID o nombre
        const index = attendees.findIndex(attendee => 
            attendee.id === identifier || 
            attendee.nombre.toLowerCase() === identifier.toString().toLowerCase()
        );

        if (index === -1) {
            return { success: false, message: `No se encontró asistente con identificador "${identifier}"` };
        }

        const asistenteEliminado = attendees[index]; 
        attendees.splice(index, 1); // splice es para eliminar el elemento del array
        this.saveAttendees(attendees);

        return { 
            success: true, 
            message: `Asistente "${asistenteEliminado.nombre}" eliminado exitosamente`,
            data: asistenteEliminado
        };
    }

    /**
     * Ver si un integrante está en el lab
     * @param {string} identifier 
     * @returns {Object} 
     */
    checkAttendee(identifier) {
        const attendees = this.getAllAttendees();
        const identifierLimpio = identifier.toString().toLowerCase();

        const asistente = attendees.find(attendee => 
            attendee.nombre.toLowerCase() === identifierLimpio
        );

        if (asistente) {
            return {
                exists: true,
                message: `Asistente "${asistente.nombre}" encontrado`,
                data: asistente
            };
        } else {
            return {
                exists: false,
                message: `No se encontró asistente con nombre "${identifier}"`,
                data: null
            };
        }
    }

    /**
     * Obtener a todos los que están en el lab
     * @returns {Array} Array con todos los asistentes registrados
     */
    getAllAttendees() {
        try {
            const stored = sessionStorage.getItem(this.storageKey);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error al leer sessionStorage:', error);
            return [];
        }
    }

    /**
     * Elimina todos los datos de la sesión
     * @returns {Object} 
     */
    clearAll() {
        try {
            sessionStorage.removeItem(this.storageKey);
            return { success: true, message: 'Todos los datos han sido eliminados' };
        } catch (error) {
            return { success: false, message: 'Error al limpiar sessionStorage' };
        }
    }

    /**
     * Obtener estadísticas como cantidad de asistentes, asistentes activos (nombres) y fecha actual
     * @returns {Object} Estadísticas de la sesión
     */
    getStats() {
        const attendees = this.getAllAttendees();
        
        return {
            totalAsistentes: attendees.length,
            asistentesActivos: attendees.map(a => a.nombre),
            fechaActual: new Date().toISOString().slice(0, 10)
        };
    }

    /**
     * Método auxiliar para guardar asistentes
     * @param {Array} attendees - Array de asistentes
     */
    saveAttendees(attendees) {
        try {
            sessionStorage.setItem(this.storageKey, JSON.stringify(attendees));
        } catch (error) {
            console.error('Error al guardar en sessionStorage:', error);
        }
    }
}

// ========================================
//      EJEMPLOS DE USO SIMPLIFICADOS
// ========================================

/*
// Crear instancia
const datalab = new DatalabAttendance();

// AGREGAR ASISTENTES
datalab.addAttendee("Arindal Contreras", "arindal@itam.mx");
datalab.addAttendee("Braulio Lozano", "braulio.lozano@itam.mx");
datalab.addAttendee("Bren Kun", "brenda@itam.mx");

// CONSULTAR
datalab.checkAttendee("Braulio Lozano");

// VER TODOS
datalab.getAllAttendees();

// ELIMINAR
datalab.removeAttendee("Bren Kun");

// ESTADÍSTICAS
datalab.getStats();

// LIMPIAR TODO
datalab.clearAll();
*/

// Exportar para uso en módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DatalabAttendance;
}
