const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./classes/Employee');
const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');

let employees = [];


// const dave = new Manager('Dave', 20, 'dsgdfgdfg', '35');
// employees.push(dave);
// console.log(employees);




start();

function start(){
    inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View Team', 'Add Employee'],
            name: 'firstChoice',
        })
        .then(choice =>{
            if(choice.firstChoice === 'View Team'){
                viewTeam();
            }
            else{
                addEmployee();
            }
        })
};

// come back to this, get it to console log if empty
function viewTeam(){
    if(employees === undefined){
        console.log('There are currently no employees.')
    }else{    
        employees.forEach(function(obj, idx){
            console.log(obj.getName());
            console.log(obj.getRole());
            console.log('----------------');
        })
    }   
}

function addEmployee(){
    inquirer
        .prompt({
            type: 'list',
            message: 'What role is the new employee?',
            choices: ['Manager', 'Engineer', 'Intern'],
            name: 'role'
        })
        .then(choice =>{
            if(choice.role === 'Manager'){
                hireManager();
            }else if(choice.role === "Engineer"){
                hireEngineer();
            }else if(choice === "Intern"){
                hireIntern();
            }
        })
}

function hireManager(){
    inquirer
        .prompt(Manager.managerQuestions)
        .then(data =>{
            employees.push(new Manager(data.name, data.id, data.email, data.officeNumber));
            console.log(`${data.name} has been added as a manager.`);
            console.log('----------------');
        })
}       

function hireEngineer(){
    inquirer
        .prompt(Engineer.engineerQuestions)
        .then(data =>{
            console.log(data);
            const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
            employees.push(newEngineer);
            console.log(`${data.name} has been added as an engineer.`);
            console.log('----------------');
        })
}

function hireIntern(){
    inquirer
        .prompt(Intern.internQuestions)
        .then(data =>{
            employees.push(new Intern(data.name, data.id, data.email, data.school));
            console.log(`${data.name} has been added as an intern.`);
            console.log('----------------');
        })
}