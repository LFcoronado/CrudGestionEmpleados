const express = require("express");
const router = express.Router();

const {createEmpleado,getEmpleados,updateEmpleado,deleteEmpleado
} = require("../controllers/empleadosController");

router.post("/create", createEmpleado);
router.get("/empleados", getEmpleados);
router.put("/update/:id", updateEmpleado);
router.delete("/delete/:id", deleteEmpleado);

module.exports = router;