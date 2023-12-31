const express = require('express');
const router = express.Router();
const employee = require('../business/employee');

// Route handler for an HTTP GET request
router.get('/', (req, res) => {
    const company = req.query.company;
    const emp_id = req.query.emp_id;

    if (company && emp_id) {
        let response = employee.get(company, emp_id);
        res.json(response);
    } else if (company) {
        let response = employee.getAll(company);
        res.json(response);
    } else {
        res.status(400).json({ "error": "The company name AND/OR emp_id is missing." });
    }
});

// Route handler for an HTTP POST request
router.post('/', (req, res) => {
    const { company, emp_name, emp_no, hire_date, job, salary, dept_id, mng_id } = req.body;
    const response = employee.post(company, emp_name, emp_no, hire_date, job, salary, dept_id, mng_id);
    res.json(response);
});

// Route handler for an HTTP PUT request
router.put('/', (req, res) => {
    const response = employee.put(req.body);
    res.json(response);
});

// Router handler for an HTTP DELETE request
router.delete('/', (req, res) => {
    res.json(employee.delete(req.query.emp_id));
});

module.exports = router;