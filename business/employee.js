const DataLayer = require('companydata');
const company_name = "js3199";
var dl = new DataLayer(company_name);

class Employee {
    constructor(company, emp_id, emp_name, emp_no, hire_date, job, salary, dept_id, mng_id) {
        this.company = company;
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_no = emp_no;
        this.hire_date = hire_date;
        this.job = job;
        this.salary = salary;
        this.dept_id = dept_id;
        this.mng_id = mng_id;
    }

    // Get an employee
    get(company, emp_id) {
        let response = null;
        if (company && emp_id) {
            let employee = dl.getEmployee(emp_id);
            if (employee !== null) {
                response = employee;
            } else {
                response = { "error": "No employee found for id: " + emp_id + "." };
            }
        } else {
            response = { "error": "The company name AND/OR id is missing." };
        }
        return response;
    }

    // Get all employees
    getAll(company) {
        let response = null;
        if (company) {
            let employees = dl.getAllEmployee(company);
            if (employees !== null) {
                response = employees;
            } else {
                response = { "error": "No employees found for company: " + company + "." };
            }
        } else {
            response = { "error": "Company name is missing." };
        }
        return response;
    }

    // Create a new employee
    post(company, emp_name, emp_no, hire_date, job, salary, dept_id, mng_id) {
        let response = null;
        if (company && emp_name && emp_no && hire_date && job && salary && dept_id !== undefined && mng_id !== undefined) {
            try {
                let newEmployee = new Employee(company, null, emp_name, emp_no, hire_date, job, salary, dept_id, mng_id);
                let insertedEmployee = dl.insertEmployee(newEmployee);
                if (insertedEmployee) {
                    response = insertedEmployee;
                } else {
                    response = { "error": "Failed to create employee." };
                }
            } catch (error) {
                response = { "error": "Error creating employee: " + error.message };
            }
        } else {
            response = { "error": "Missing required fields for employee creation." };
        }
        return response;
    }

}