const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return `GitHub: ${this.github}`;
    }

    getRole(){
        return 'Engineer';
    }
}

let engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the engineer's ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub username?",
        name: 'github',
    }
];

module.exports = {Engineer, engineerQuestions};