🚀 Sistema de Gestión de Empleados

![React](https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange?logo=mysql&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-UI-purple?logo=bootstrap&logoColor=white)


Aplicación para la gestión de empleados que permite "registrar, editar, eliminar, buscar y ordenar empleados" de forma sencilla.

Este proyecto fue desarrollado como práctica de desarrollo "Frontend + Backend + Base de Datos".

🖥️ Vista del sistema



---

🛠️ Tecnologías utilizadas

🎨 Frontend

🔹 ⚛️ React.js
🔹 🎨 Bootstrap
🔹 🔗 Axios

⚙️ Backend

🔹 🟢 Node.js
🔹 🚂 Express.js

- 🗄️ Base de datos

🔹 MySQL
🔹 Laragon

⚙️ Funcionalidades

✅ Registrar empleados
✅ Editar empleados
✅ Eliminar empleados
✅ Buscar empleados en tiempo real
✅ Ordenar empleados por columnas
✅ Indicador de carga (Loading spinner)


🚀 Instalación del proyecto

1️⃣ Clonar repositorio

🔹git clone https://github.com/LFcoronado/crud.git

2️⃣ Instalar dependencias

🔹Frontend

$cd client
npm install

🔹Backend

$cd server
npm install


3️⃣ Configurar base de datos

🔹Crear base de datos en MySQL:


CREATE DATABASE empleados;


Crear tabla:


CREATE TABLE empleados (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nombre VARCHAR(100),
 edad INT,
 pais VARCHAR(100),
 cargo VARCHAR(100),
 anios INT
);


4️⃣ Ejecutar el proyecto

🔹 Backend

npm start

🔹Frontend

npm start


📸 Características del sistema

📋 Gestión completa de empleados
🔍 Búsqueda dinámica
📊 Ordenamiento por columnas
⚡ Interfaz rápida y sencilla
🎨 Diseño con Bootstrap


🚀 Mejoras futuras

🔹 Autenticación de usuarios
🔹 Documentación de API
🔹 Deploy en la nube


👨‍💻 Autor

🔹Luis Felipe Coronado

💻 Estudiante de Tecnología en Sistemas
🚀 Interesado en desarrollo Full Stack


⭐ Si te gusta este proyecto puedes darle una estrella al repositorio.
