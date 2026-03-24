import "./App.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";


import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";

import {getEmpleados,createEmpleado, updateEmpleado, deleteEmpleado} from "./services/empleadosService";

function App() {
 const [nombre, setNombre] = useState("");
 const [edad, setEdad] = useState("");
 const [pais, setPais] = useState("");
 const [cargo, setCargo] = useState("");
 const [anios, setAnios] = useState("");

 const [empleados, setEmpleados] = useState([]);
 const [id, setId] = useState(0);
 const [editar, setEditar] = useState(false);
 const [loading, setLoading] = useState(false);
 const [busqueda, setBusqueda] = useState("");


 const empleadosFiltrados = empleados.filter((emp) =>
  emp.nombre.toLowerCase().includes(busqueda.toLowerCase())||
  emp.pais.toLowerCase().includes(busqueda.toLowerCase()) ||
  emp.cargo.toLowerCase().includes(busqueda.toLowerCase())
);
  const limpiarCampos = () => {
    setNombre("");setEdad("");setPais(""); setCargo("");setAnios("");
  }
  const cargarEmpleados = () => {
     setLoading(true);

    getEmpleados()
      .then((res) => {
        setEmpleados(res.data);
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: "No se pudieron cargar los empleados",
          icon: "error",
          confirmButtonText: "Aceptar"
        });
        console.error(err);
      }).finally(() => {
      setLoading(false);
    });
  };
  useEffect(() => {
    cargarEmpleados();
  }, []);


  const add = () => {

    if (!nombre || !edad || !pais || !cargo || !anios) {
    Swal.fire({
      title: "Campos incompletos",
      text: "Por favor completa todos los campos",
      icon: "warning",
      confirmButtonText: "Aceptar"
    });
    return;
  }
    createEmpleado({ nombre, edad, pais, cargo, anios })
      .then(() => {
        cargarEmpleados();
       Swal.fire({
        title: "<strong>Empleado registrado</strong>",
        html: `<i>El empleado <strong>${nombre}</strong> ha sido registrado exitosamente</i>`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        timer:3000
      });
        limpiarCampos();
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: "No se pudo registrar el empleado",
          icon: "error",
          confirmButtonText: "Aceptar"
        });
        console.error(err);

      });

  };


  const update = () => {
    if (!nombre || !edad || !pais || !cargo || !anios) {
    Swal.fire({
      title: "Campos incompletos",
      text: "Por favor completa todos los campos",
      icon: "warning",
      confirmButtonText: "Aceptar"
    });
    return;
  }
    updateEmpleado(id, { nombre, edad, pais, cargo, anios })
      .then(() => {
        cargarEmpleados();
        Swal.fire({
          title: "Actualizado",
          text: "Empleado actualizado correctamente",
          icon: "success",
          timer: 2500,
          confirmButtonText: "Aceptar"
        });
        limpiarCampos();
        setEditar(false);
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: "No se pudo actualizar el empleado",
          icon: "error",
          confirmButtonText: "Aceptar"
        });
        console.error(err);
      });
  };

  const editarEmpleado = (val) => {
    setEditar(true);
    setNombre(val.nombre);
    setEdad(val.edad);
    setPais(val.pais);
    setCargo(val.cargo);
    setAnios(val.anios);
    setId(val.id);

  };


  const cancelar = () => {
    setEditar(false);
    limpiarCampos();

  };


  const eliminarEmpleado = (id) => {

    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {

      if (result.isConfirmed) {

        deleteEmpleado(id)

          .then(() => {

            cargarEmpleados();

            Swal.fire({
              title: "Eliminado",
              text: "Empleado eliminado correctamente",
              icon: "success",
              timer: 2500,
              confirmButtonText: "Aceptar"
            });

          })

          .catch((err) => {

            Swal.fire({
              title: "Error",
              text: "No se pudo eliminar el empleado",
              icon: "error",
              confirmButtonText: "Aceptar"
            });

            console.error(err);

          });

      }

    });

  };


  return (

    <div className="container">
      <h2 className="text-center mb-4">Sistema Gestión de Empleados</h2>

      <EmployeeForm
        nombre={nombre}
        edad={edad}
        pais={pais}
        cargo={cargo}
        anios={anios}
        setNombre={setNombre}
        setEdad={setEdad}
        setPais={setPais}
        setCargo={setCargo}
        setAnios={setAnios}
        editar={editar}
        add={add}
        update={update}
        cancelar={cancelar}
      />
      <div className="mb-3 mt-3">
  <input
    type="text"
    className="form-control"
    placeholder="Buscar empleado"
    value={busqueda}
    onChange={(e) => setBusqueda(e.target.value)}
  />
</div>
      <EmployeeTable
        empleados={empleadosFiltrados}
        editarEmpleado={editarEmpleado}
        eliminarEmpleado={eliminarEmpleado}
        loading={loading}
      />

    </div>

  );
}

export default App;