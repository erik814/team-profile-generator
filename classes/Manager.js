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
`

module.exports = {Manager, managerHTML};
