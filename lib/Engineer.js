// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super();
        this.name = name; 
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = "Engineer";
    }
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getGithub() {
        return this.github;
    };
    getRole() {
        return this.role;
    };
}

module.exports = Engineer;