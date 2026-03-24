import axios from "axios";

const API = "http://localhost:3001";

export const getEmpleados = () => axios.get(`${API}/empleados`);

export const createEmpleado = (data) =>
  axios.post(`${API}/create`, data);

export const updateEmpleado = (id, data) =>
  axios.put(`${API}/update/${id}`, data);

export const deleteEmpleado = (id) =>
  axios.delete(`${API}/delete/${id}`);