// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(name, id, email, role, school) {
        this.name = name; 
        this.id = id;
        this.email = email;
        this.role = role;
        this.school = school;
    }
}

module.exports = Intern;