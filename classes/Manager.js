const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Role: Manager';
    }
}

let managerQuestions = [
    {
        type: 'input',
        message: "What is the manager's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the manager's ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the manager's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'officeNumber',
    }
];

let managerHTML = `
<div class="card">
    <div class="employeeHeader">
        <h2>${this.name}</h2>
        <h3>${this.getRole()}</h3>
    </div>
    
    <div class="info">
        <div>${this.id}</div>
        <div>${this.email}</div>
        <div>${this.officeNumber}</div>
    </div>
</div>
`;

module.exports = {Manager, managerQuestions, managerHTML};
