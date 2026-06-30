const express = require("express");

const router = express.Router();

const {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee
} = require("../controllers/employeeController");



router.get("/", getAllEmployees);


router.get("/:id", getEmployeeById);



router.post("/", addEmployee);


// UPDATE

router.put("/:id", updateEmployee);


// DELETE

router.delete("/:id", deleteEmployee);

module.exports = router;


