const express = require('express');
const router = express.Router();
const department = require('../business/department');

// Route handler for an HTTP GET request
router.get('/', (req, res) => {
    const company = req.query.company;
    const dept_id = req.query.dept_id;

    let response;

    if (dept_id) {
        response = department.get(company, dept_id);
    } else {
        response = department.getAll(company);
    }

    res.json(response);
});