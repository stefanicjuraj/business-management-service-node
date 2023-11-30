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

// Route handler for an HTTP POST request
router.post('/', (req, res) => {
    const { company, dept_name, dept_no, location } = req.body;
    const result = department.post(company, dept_name, dept_no, location);

    res.json(result);
});

// Route handler for an HTTP PUT request
router.put('/', (req, res) => {
    const deptInfo = {
        company: req.body.company,
        dept_id: req.body.dept_id,
        dept_name: req.body.dept_name,
        dept_no: req.body.dept_no,
        location: req.body.location
    };
    const response = department.put(deptInfo);

    res.json(response);
});

// Router handler for an HTTP DELETE request
router.delete('/', (req, res) => {
    res.json(department.delete(req.query.company, req.query.dept_id));
});