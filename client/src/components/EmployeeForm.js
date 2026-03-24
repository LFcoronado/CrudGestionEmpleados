import React from "react";

function EmployeeForm({nombre,edad,pais,cargo,anios,setNombre,setEdad,setPais,
  setCargo,
  setAnios,
  editar,
  add,
  update,
  cancelar
}) {
  return (
    <div className="card text-center">

      

      <div className="card-body">

        <div className="input-group mb-3">
          <span className="input-group-text">Nombre:</span>
          <input required 
            type="text"
            placeholder="Nombre Completo"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Edad:</span>
          <input required
            type="number"
            placeholder="Edad"
            className="form-control"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">País:</span>
          <input required
            type="text"
            placeholder="País "
            className="form-control"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Cargo:</span>
          <input required
            type="text"
            placeholder="Cargo"
            className="form-control"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Años:</span>
          <input required
            type="number"
            placeholder="Años de Experiencia"
            className="form-control"
            value={anios}
            onChange={(e) => setAnios(e.target.value)}
          />
        </div>

      </div>

      <div className="card-footer">

        {editar ? (
          <>
            <button className="btn btn-warning m-2" onClick={update}>
              Actualizar
            </button>

            <button className="btn btn-secondary" onClick={cancelar}>
              Cancelar
            </button>
          </>
        ) : (
          <button className="btn btn-success m-2" onClick={add}>
            Registrar
          </button>
        )}

      </div>

    </div>
  );
}

export default EmployeeForm;