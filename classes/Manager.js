const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager';
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

module.exports = {Manager, managerQuestions};
