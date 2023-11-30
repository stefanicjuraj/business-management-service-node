const express = require('express');
const app = express();

const port = 3000;
const baseURL = "/BusinessManagementServiceNode/CompanyServices";

const departmentRouter = require('./service/department');
const employeeRouter = require('./service/employee');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// The 'departmentRouter' router handles department-related endpoints
app.use(`${baseURL}/department`, departmentRouter);
app.use(`${baseURL}/departments`, departmentRouter);

// The 'employeeRouter' router handles employee-related endpoints
app.use(`${baseURL}/employee`, employeeRouter);
app.use(`${baseURL}/employees`, employeeRouter);

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}/`);
});