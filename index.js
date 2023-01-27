const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./classes/Employee');
const {Manager} = require('./classes/Manager');
const {Engineer} = require('./classes/Engineer');
const {Intern} = require('./classes/Intern');
const questions = require('./assets/questions');

let employees = [];


const dave = new Manager('Dave', 20, 'dsgdfgdfg', '35');
employees.push(dave);


start();

function start(){
    inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View Team', 'Add Employee', 'Generate Team Sheet'],
            name: 'firstChoice',
        })
        .then(choice =>{
            if(choice.firstChoice === 'View Team'){
                viewTeam();
            }
            else if(choise.firstChoice === 'Add Employee'){
                addEmployee();
            }else if(choice.firstChoice === 'Generate Team Sheet'){
                generateTeamSheet();
            }
        })
};

// come back to this, get it to console log if empty
function viewTeam(){
    if(employees === []){
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
        .prompt(questions.managerQuestions)
        .then(data =>{
            employees.push(new Manager(data.name, data.id, data.email, data.officeNumber));
            console.log('----------------');
            console.log(`${data.name} has been added as a manager.`);
            console.log('----------------');
            start();
        })
}       

function hireEngineer(){
    inquirer
        .prompt(questions.engineerQuestions)
        .then(data =>{
            console.log(data);
            employees.push(new Engineer(data.name, data.id, data.email, data.github));
            console.log('----------------');
            console.log(`${data.name} has been added as an engineer.`);
            console.log('----------------');
            start();
        })
}

function hireIntern(){
    inquirer
        .prompt(questions.internQuestions)
        .then(data =>{
            employees.push(new Intern(data.name, data.id, data.email, data.school));
            console.log('----------------');
            console.log(`${data.name} has been added as an intern.`);
            console.log('----------------');
            start();
        })
}

let employeeHtml =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <title>My Team</title>
</head>
<body>
    <header class="header">
        <h1>My Team</h1>
    </header>

    <div class="teamContainer">


    </div>
</body>
</html>`
