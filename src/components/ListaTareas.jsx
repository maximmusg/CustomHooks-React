import { useReducer } from "react";
import { useForm } from "../hooks/useForm";

const initialState = [
  {
    id: new Date().getTime(),
    tarea: "Aprender Reducers",
    finalizada: false,
  },
];

const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[TAREAS] Agregar Tarea":
      return [...state, action.payload];
    case "[TAREAS] Finalizar Tarea":
      return state.map((tarea) => {
        if (tarea.id == action.payload) {
          return {
            ...tarea,
            finalizada: !tarea.finalizada,
          };
        }
        return tarea;
      });
    // return [...state, action.payload]
    case "[TAREAS] Eliminar Tarea":
      return state.filter((tarea) => tarea.id !== action.payload);
    // return [...state, action.payload]
    case "[TAREAS] borrar Tareas":
      return [];
    default:
      return state;
  }
};

export const ListaTareas = () => {
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  const { tarea, formState, onInputChange } = useForm({ tarea: "" });

  const agregarTarea = (e) => {
    e.preventDefault();
    if (formState.tarea == "") return;
    const tarea = {
      id: new Date().getTime(),
      tarea: formState.tarea,
      finalizada: false,
    };
    console.log(tarea);

    const action = {
      type: "[TAREAS] Agregar Tarea",
      payload: tarea,
    };
    dispatch(action);
  };

  const finalizarTarea = ({ id }) => {
    const action = {
      type: "[TAREAS] Finalizar Tarea",
      payload: id,
    };
    dispatch(action);
  };

  const eliminarTarea = ({ id }) => {
    const action = {
      type: "[TAREAS] Eliminar Tarea",
      payload: id,
    };
    dispatch(action);
  };

  const reset = () => {
    const action = {
      type: "[TAREAS] borrar Tareas",
      payload: "",
    };
    dispatch(action);
  };

  return (
    <>
      <form onSubmit={agregarTarea}>
        <div className="form-group">
          <label htmlFor="tarea">Ingresa Nueva Tarea</label>
          <input
            type="text"
            name="tarea"
            className="form-control"
            placeholder="Ingresa tarea"
            value={tarea}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button className="btn btn-danger" onClick={reset}>
          Reset
        </button>
      </form>

      <hr />

      <ul className="list-group">
        {state.map((item) => {
          return (
            <li
              className="list-group-item list-group-item-primary d-flex justify-content-between"
              key={item.id}
            >
              <span>{item.tarea}</span>
              <div>
                <input
                  type="checkbox"
                  value={item.finalizada}
                  onChange={() => finalizarTarea(item)}
                />
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarTarea(item)}
                >
                  X
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
