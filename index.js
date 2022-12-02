
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

//TODO - write your inquirer app here to gather information about the team members, and generate the HTML file using fs
function newEmployee() {
    inquirer.createPromptModule([
        {
        type : 'list',
        name : 'Position',
        message : 'What position is this employee',
        choices : [
            'Manager',
            'Intern',
            'Engineer',
            ]
        },
        {
            type: 'input',
            name : 'name',
            message: 'What is the name of the employee?',
        },
        {
            type: 'input',
            name : 'email',
            message: 'What is the email of the employee?',
        },
        {
            type: 'input',
            name : 'id',
            message: 'What is the id of the employee?',
        }
        
        ]).then(({position, email, id, name}) => {
            switch (position) {
                case 'Manager':
                //ask about office number
                inquirer.prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is the office number?',
                }
            ]).then(({ officeNumber}) => {
                employees.push(new Manager(
                    name,
                    id,
                    email,
                    officeNumber
                ))
            })
            break;
                case 'Intern':
                // ask about school
                case 'Engineer':
                // ask about github
                default:
        
            }
            inquirer.prompt([
                {
                    type : 'confirm',
                    name : 'moreEmployees',
                    message : "Would you like to add another Employee?"
                }
            ]).then(({ moreEmployees }) => {
                if (moreEmployees) newEmployee()
                else renderHTML()
            })
            // 2:21
        })
}