// Require files and modules & declare variables
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];

// Function uses inquirer to gather information about team members and creates objects for each team member
function getEmployeeInfo() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Employee name:"
        },
        {
            type: "input",
            name: "email",
            message: "Employee email:"
        },
        {
            type: "input",
            name: "id",
            message: "Employee ID number:"
        },
        {
            type: "list",
            name: "role",
            message: "Employee role:",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Manager's office number:",
            when: (answers) => answers.role === "Manager"
        },
        {
            type: "input",
            name: "github",
            message: "Engineer's GitHub username:",
            when: (answers) => answers.role === "Engineer"
        },
        {
            type: "input",
            name: "school",
            message: "Intern's school:",
            when: (answers) => answers.role === "Intern"
        }
    ])
    .then((answers) => {
        switch(answers.role) {
            case "Manager":
                let newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                employees.push(newManager);
                break;
            case "Engineer":
                let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                employees.push(newEngineer);
                break;
            case "Intern":
                let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
                employees.push(newIntern);
                break;
        }
        addEmployee();
    });
}

// Function allows user to add additional employees, and once finished, creates html file
function addEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "addEmployee",
            message: "Would you like to add another employee?",
            choices: ["Yes", "No"]
        }
    ])
    .then((response) => {
        if (response.addEmployee === "Yes") {
            console.log("-------------------")
            getEmployeeInfo();
        } else {
            let html = render(employees);
            fs.writeFile(outputPath, html, (err) => {
                if (err) throw err;
            });
            console.log("File 'team.html' successfully generated and saved in 'output' directory.")
        }
    });
}

// Call function to begin application
getEmployeeInfo();
