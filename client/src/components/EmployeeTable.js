import React from "react";

function EmployeeTable({ empleados, editarEmpleado, eliminarEmpleado, loading }) {
  return (
    <table className="table table-striped mt-4">

      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>País</th>
          <th>Cargo</th>
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

          empleados.map((val) => (

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
                  Editar
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminarEmpleado(val.id)}
                >
                  Eliminar
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