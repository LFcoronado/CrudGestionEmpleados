import React from "react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";


function EmployeeTable({ empleados, editarEmpleado, eliminarEmpleado, loading }) {
 const [orden, setOrden] = useState("asc");
 const [campoOrden, setCampoOrden] = useState("");
 
 const ordenar = (campo) => {
  const nuevoOrden = orden === "asc" ? "desc" : "asc";
  setOrden(nuevoOrden);
  setCampoOrden(campo);
}
const empleadosOrdenados = [...empleados].sort((a, b) => {

  if (!campoOrden) return 0;

  if (orden === "asc") {
    return a[campoOrden] > b[campoOrden] ? 1 : -1;
  } else {
    return a[campoOrden] < b[campoOrden] ? 1 : -1;
  }

});
 
  return (
    <table className="table table-striped mt-4">

     <thead>
       <tr>
        <th>#</th>
        <th onClick={() => ordenar("nombre")} style={{cursor:"pointer"}}>Nombre ⬍</th>
        <th onClick={() => ordenar("edad")} style={{cursor:"pointer"}}>Edad ⬍</th>
        <th onClick={() => ordenar("pais")} style={{cursor:"pointer"}}>País ⬍</th>
        <th onClick={() => ordenar("cargo")} style={{cursor:"pointer"}}>Cargo ⬍</th>
        <th>Experiencia</th>
        <th>Acciones</th>
    </tr>
</thead>

      <tbody>

        {loading ? (

          <tr>
            <td colSpan="7" className="text-center">
              <div className="spinner-border text-primary" role="status"></div>
              <p className="mt-2">Cargando empleados..</p>
            </td>
          </tr>

        ) : (

          empleadosOrdenados.map((val) => (

            <tr key={val.id}>
              <th>{val.id}</th>
              <td>{val.nombre}</td>
              <td>{val.edad}</td>
              <td>{val.pais}</td>
              <td>{val.cargo}</td>
              <td>{val.anios}</td>

              <td>

                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => editarEmpleado(val)}
                >
                  <FaEdit />
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminarEmpleado(val.id)}
                >
                  <FaTrash />
                </button>

              </td>

            </tr>

          ))

        )}

      </tbody>

    </table>
  );
}

export default EmployeeTable;