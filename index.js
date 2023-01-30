const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./classes/Employee');
const {Manager, managerQuestions} = require('./classes/Manager');
const {Engineer, engineerQuestions} = require('./classes/Engineer');
const {Intern, internQuestions} = require('./classes/Intern');

let employees = [];

start();

function start(){
    inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do?',
            choices: ['Add Employee', 'Generate Team Sheet'],
            name: 'firstChoice',
        })
        .then(choice =>{
            if(choice.firstChoice === 'View Team'){
                viewTeam();
            }else if(choice.firstChoice === 'Add Employee'){
                addEmployee();
            }else if(choice.firstChoice === 'Generate Team Sheet'){
                generateTeamSheet();
            }
        })
};

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
            }else if(choice.role === "Intern"){
                hireIntern();
            }
        })
}

function hireManager(){
    inquirer
        .prompt(managerQuestions)
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
        .prompt(engineerQuestions)
        .then(data =>{
            employees.push(new Engineer(data.name, data.id, data.email, data.github));
            console.log('----------------');
            console.log(`${data.name} has been added as an engineer.`);
            console.log('----------------');
            start();
        })
}

function hireIntern(){
    inquirer
        .prompt(internQuestions)
        .then(data =>{
            employees.push(new Intern(data.name, data.id, data.email, data.school));
            console.log('----------------');
            console.log(`${data.name} has been added as an intern.`);
            console.log('----------------');
            start();
        })
};

function generateTeamSheet(){
    let employeeHtml =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/style.css">
    <title>My Team</title>
</head>
<body>
    <header class="header">
        <h1>My Team</h1>
    </header>

    <div class="container">
        <div class="teamContainer row">`

        employees.forEach(function(obj, idx){
            if(obj.getRole() === "Manager"){
                employeeHtml += `
                <div class="card col-4">
                    <div class="employeeHeader">
                        <h2>${obj.name}</h2>
                        <h3>${obj.getRole()}<h3>
                    </div>
                    
                    <div class="infoContainer">
                        <div class="info">ID: ${obj.id}</div>
                        <div class="info">
                            <a href = "mailto: ${obj.email}">${obj.email}</a>
                        </div>
                        <div class="info">Office Number: ${obj.officeNumber}</div>
                    </div>
                </div>`
            }else if(obj.getRole() === 'Engineer'){
                employeeHtml += `
                <div class="card col-4">
                    <div class="employeeHeader">
                        <h2>${obj.name}</h2>
                        <h3>${obj.getRole()}</h3>
                    </div>
                    
                    <div class="infoContainer">
                        <div class="info">ID: ${obj.id}</div>
                        <div class="info">
                            <a href = "mailto: ${obj.email}">${obj.email}</a>
                        </div>
                        <div class="info">
                            <a href = "${obj.github}">${obj.github}</a>
                        </div>
                    </div>
                </div>`
            }else if(obj.getRole() === 'Intern'){
                employeeHtml += `
                <div class="card col-4">
                    <div class="employeeHeader">
                        <h2>${obj.name}</h2>
                        <h3>${obj.getRole()}</h3>
                    </div>
                    
                    <div class="infoContainer">
                        <div class="info">ID: ${obj.id}</div>
                        <div class="info">
                            <a href = "mailto: ${obj.email}">${obj.email}</a>
                        </div>
                        <div class="info">School: ${obj.school}</div>
                    </div>
                </div>`
            }
        });

    employeeHtml += `
        </div>
    </div>
</body>
</html>`;
    
    fs.writeFile('team-sheet.html', employeeHtml, err =>{
        if(err){
            console.log(err)
        }else{
            console.log('Your team sheet has been created!')
        }
    })
};