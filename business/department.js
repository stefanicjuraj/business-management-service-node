const DataLayer = require('companydata');
const company_name = "js3199";
var dl = new DataLayer(company_name);

class Department {
    constructor(company, dept_id, dept_name, dept_no, location) {
        this.company = company;
        this.dept_id = dept_id;
        this.dept_name = dept_name;
        this.dept_no = dept_no;
        this.location = location;
    }

    // Get a department
    get(company, id) {
        let response = null;
        if (company && id) {
            let department = dl.getDepartment(company, id);
            if (department !== null) {
                response = department;
            } else {
                response = {
                    "error": "No department found for company: " + company + " and id: " + id + "."
                };
            }
        } else {
            response = { "error": "The company name AND/OR id is missing." };
        }
        return response;
    }

    // Get all departments
    getAll(company) {
        let response = null;
        if (company) {
            let department = dl.getAllDepartment(company);
            if (department !== null) {
                response = department;
            } else {
                response = { "error": "No departments found for company: " + company + "." };
            }
        } else {
            response = { "error": "Company name is missing." };
        }
        return response;
    }

    // Create a new department
    post(company, dept_name, dept_no, location) {
        let response = null;

        if (company && dept_name && dept_no && location) {
            let existingDept = dl.getDepartment(company, dept_no);
            if (existingDept) {
                return { "error": "Department number '" + dept_no + "' already exists." };
            }

            try {
                let department = new Department(company, null, dept_name, dept_no, location);
                let insertedDepartment = dl.insertDepartment(department);
                if (insertedDepartment) {
                    response = insertedDepartment;
                } else {
                    response = { "error": "Failed to create department." };
                }
            } catch (error) {
                response = { "error": "Error creating department: " + error.message };
            }
        } else {
            response = { "error": "Missing required fields for department creation." };
        }
        return response;
    }

    // Update a department
    put(deptInfo, res) {
        let response = null;

        if (deptInfo && deptInfo.company && deptInfo.dept_id && deptInfo.dept_name && deptInfo.dept_no && deptInfo.location) {
            try {
                let department = new Department(deptInfo.company, deptInfo.dept_id, deptInfo.dept_name, deptInfo.dept_no, deptInfo.location);
                let updatedDepartment = dl.updateDepartment(department);
                if (updatedDepartment) {
                    response = { "success": "Department updated successfully.", "department": updatedDepartment };
                } else {
                    response = { "error": "Failed to update department." };
                }
            } catch (error) {
                response = { "error": "Error updating department: " + error.message };
            }
        } else {
            response = { "error": "Missing required fields for department update." };
        }
        return response;
    }

}