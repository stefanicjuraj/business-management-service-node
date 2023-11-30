const express = require('express');
const app = express();

const port = 3000;
const baseURL = "/BusinessManagementServiceNode/CompanyServices";

const departmentRouter = require('./service/department');
const employeeRouter = require('./service/employee');