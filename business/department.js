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
}