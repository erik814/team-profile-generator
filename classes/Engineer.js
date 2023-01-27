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
        return 'Role: Engineer';
    }
}

let engineerHTML = `
<div class="card">
    <div class="employeeHeader">
        <h2>Name</h2>
        <h3>Role</h3>
    </div>
    
    <div class="info">
        <div>ID</div>
        <div>email</div>
        <div>github</div>
    </div>
</div>
`


module.exports = {Engineer, engineerHTML};