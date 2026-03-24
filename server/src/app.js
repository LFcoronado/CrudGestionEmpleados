const express = require("express");
const cors = require("cors");

const empleadosRoutes = require("./routes/empleadosRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", empleadosRoutes);

module.exports = app;