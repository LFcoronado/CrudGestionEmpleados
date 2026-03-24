const db = require("../config/db");

exports.createEmpleado = (req, res) => {
    const { nombre, edad, pais, cargo, anios } = req.body;

    db.query(
        "INSERT INTO empleados (nombre, edad, pais, cargo, anios) VALUES (?, ?, ?, ?, ?)",
        [nombre, edad, pais, cargo, anios],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.send("Empleado registrado");
            }
        }
    );
};

exports.getEmpleados = (req, res) => {
    db.query("SELECT * FROM empleados", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    });
};

exports.updateEmpleado = (req, res) => {
    const id = req.params.id;
    const { nombre, edad, pais, cargo, anios } = req.body;

    db.query(
        "UPDATE empleados SET nombre=?, edad=?, pais=?, cargo=?, anios=? WHERE id=?",
        [nombre, edad, pais, cargo, anios, id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.send("Empleado actualizado");
            }
        }
    );
};

exports.deleteEmpleado = (req, res) => {
    const id = req.params.id;

    db.query(
        "DELETE FROM empleados WHERE id=?",
        [id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.send("Empleado eliminado");
            }
        }
    );
};