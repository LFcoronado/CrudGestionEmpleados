import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [pais, setPais] = useState('');
  const [cargo, setCargo] = useState('');
  const [anios, setAnios] = useState('');
  const [empleados, setEmpleados] = useState([]);
  const [id, setId] = useState(0);

  const [editar, setEditar] = useState(false);
  const add = () => {
    axios.post('http://localhost:3001/create', {
      nombre,
      edad,
      pais,
      cargo,
      anios
    })
    .then(() => {
      console.log('Empleado registrado');
      alert('Empleado registrado');
      setNombre('');
      setEdad('');
      setPais('');
      setCargo('');
      setAnios('');

      getEmpleados();
    })
    .catch(err => {
      console.error('Error al registrar:', err);
    });
  };

  const update= () => {
    axios.put(`http://localhost:3001/update/${id}`, {
      nombre: nombre,
      edad: edad,
      pais: pais,
      cargo: cargo,
      anios: anios,
      id: id
    })
    .then(() => {
      console.log('Empleado actualizado');
      alert('Empleado actualizado');
      setNombre('');
      setEdad('');
      setPais('');
      setCargo('');
      setAnios('');

      getEmpleados();
    })
    .catch(err => {
      console.error('Error al registrar:', err);
    });
  };
  const editarEmpleado =(val) => {
  setEditar(true);
  setNombre(val.nombre);
  setEdad(val.edad);
  setPais(val.pais);
  setCargo(val.cargo);
  setAnios(val.anios);
  setId(val.id);
}

  const cancelar = () => {
    setEditar(false);
    setNombre('');
    setEdad('');
    setPais('');
    setCargo('');
    setAnios('');
    setId(0);
  };
  const getEmpleados = () => {
    axios.get('http://localhost:3001/empleados')
      .then((response) => {
        setEmpleados(response.data);
      })
      .catch(err => {
        console.error('Error al obtener empleados:', err);
      });
  };

  useEffect(() => {
    getEmpleados();
  }, []);

  

  return (
    <div className="container">
        <div className="card text-center">
          <div className="card-header">
            GESTION DE EMPLEADOS
          </div>

          <div className="card-body">

            <div className="input-group mb-3">
              <span className="input-group-text">Nombre:</span>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese un nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Edad:</span>
              <input
                type="number"
                className="form-control"
                placeholder="Ingrese la edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">País:</span>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese el país"
                value={pais}
                onChange={(e) => setPais(e.target.value)}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Cargo:</span>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese el cargo"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Años:</span>
              <input
                type="number"
                className="form-control"
                placeholder="Ingrese los años de experiencia"
                value={anios}
                onChange={(e) => setAnios(e.target.value)}
              />
            </div>
          </div>

          <div className="card-footer text-body-secondary">
            {
            editar ?
            <div>
              <button className="btn btn-warning m-2" onClick={update}>Actualizar</button> <button className="btn btn-warning" onClick={cancelar}>Cancelar</button>
            </div> 
            : <button className="btn btn-success m-2" onClick={add}>Registrar</button>
            }
    </div>
        </div>
        <table className="table table-striped">
            <thead>
               <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Edad</th>
                <th scope="col">País</th>
                <th scope="col">Cargo</th>
                <th scope="col">Experiencia</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
          <tbody>
           {empleados.map((val, key) => (
            <tr key={key}>
              <th scope="row">{val.id}</th>
              <td>{val.nombre}</td>
              <td>{val.edad}</td>
              <td>{val.pais}</td>
              <td>{val.cargo}</td>
              <td>{val.anios}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2" onClick={() => editarEmpleado(val)}>Editar</button>
                <button className="btn btn-danger btn-sm">Eliminar</button>
              </td>
            </tr>
           ))}          
            </tbody>
        </table>
       </div>
  
  );
}

export default App;
