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