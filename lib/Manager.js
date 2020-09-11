// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, id, email, role, office) {
        this.name = name; 
        this.id = id;
        this.email = email;
        this.role = role;
        this.office = office;
    }
}

module.exports = Manager;