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

}