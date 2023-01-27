const Employee = require('./Employee');

class  Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return `School: ${this.school}`;
    }

    getRole(){
        return 'Role: Intern';
    }
}

let internHTML = `
<div class="card">
    <div class="employeeHeader">
        <h2>Name</h2>
        <h3>Role</h3>
    </div>
    
    <div class="info">
        <div>ID</div>
        <div>email</div>
        <div>school</div>
    </div>
</div>
`

module.exports = {Intern, internHTML};