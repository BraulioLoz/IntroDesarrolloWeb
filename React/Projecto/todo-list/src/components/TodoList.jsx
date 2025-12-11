import { useEffect, useState } from "react";

// Componente para representar un ítem de la lista
// Creado como funcion con declaración clásica
function ListItem({ id, completado, texto, cambiaValor }) {
  return (
    <li>
      <input
        className="form-check-input"
        type="checkbox"
        checked={completado}
        id={`check-${id}`}
        onChange={cambiaValor}
      />
      <span>{texto}</span>
    </li>
  );
}

// Componente para agregar nuevas tareas
function NewItemsForm({ onAgregarTarea }) {
  const [texto, setTexto] = useState("");

  const handleAgregar = () => {
    if (texto.trim() !== "") {
      onAgregarTarea(texto);
      setTexto("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button onClick={handleAgregar}>Agregar</button>
    </div>
  );
}

// Componente principal de la lista de tareas
// Creado como función con expresión de función flecha
export const TodoList = () => {
  // Estado para las tareas. Se usa useState para manejar la variable de estado 'tareas'
  // El usar useState permite que se recuerde el valor entre renderizados y que al cambiar el valor
  // se vuelva a renderizar el componente
  const [tareas, setTareas] = useState([
    { id: 1, completado: true, texto: "Aprender HTML" },
    { id: 2, completado: false, texto: "Aprender CSS" },
  ]);

  // Estado para la última hora de cambios
  const [ultimaHoraDeCambios, setUltimaHoraDeCambios] = useState("");

  // Efecto secundario para actualizar la última hora de cambios cuando las tareas cambian
  useEffect(() => {
    const cambio = new Date().toLocaleTimeString();
    setUltimaHoraDeCambios(cambio);
  }, [tareas]);

  // Función para cambiar el estado de una tarea por su ID
  const cambiaTareaPorId = (id) => {
    setTareas((arregloPrevio) =>
      arregloPrevio.map((tarea) => //map 
        tarea.id === id ? { ...tarea, completado: !tarea.completado } : tarea
      )
    );
  };

  // Función para agregar una nueva tarea
  const agregarTarea = (texto) => {
    const nuevoId = tareas.length > 0 ? Math.max(...tareas.map((t) => t.id)) + 1 : 1;
    setTareas([...tareas, { id: nuevoId, completado: false, texto }]);
  };

  return (
    <>
      <div>
        <h1>Todo list</h1>
        <NewItemsForm onAgregarTarea={agregarTarea} />
        {tareas.map((tarea) => (
          <ListItem
            key={tarea.id}
            id={tarea.id}
            completado={tarea.completado}
            texto={tarea.texto}
            cambiaValor={() => cambiaTareaPorId(tarea.id)}
          />
        ))}
      </div>
      <div>Ultimo cambio: {ultimaHoraDeCambios}</div>
    </>
  );
};
export default TodoList;